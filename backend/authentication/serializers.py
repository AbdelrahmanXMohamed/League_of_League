from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.db import models
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from .models import User
from django.contrib import auth
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import force_str
class RegisterSerailizer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=68,min_length=6,write_only=True)
    class Meta:
        model=User
        fields=['email','username','password']
    
    def validate(self,attrs):
        email=attrs.get('email','')
        username=attrs.get('username','')
        if not username.isalnum():
            raise serializers.ValidationError(
                'The username should only contain alphanumeric characters'
            )

        return attrs
    
    def create(self,validated_data):
        return User.objects.create_user(**validated_data)

class LoginSerailizer(serializers.ModelSerializer):
    email=serializers.EmailField(max_length=255)
    password=serializers.CharField(max_length=68,min_length=6,write_only=True)
    username=serializers.CharField(max_length=68,min_length=6,read_only=True)
    token=serializers.CharField(max_length=68,read_only=True)
    remember_me=serializers.BooleanField(default=False,write_only=True)
    class Meta:
        model=User
        fields=['email','password','username','token','remember_me']
    def validate(self,attrs):
        email=attrs.get('email','')
        password=attrs.get('password','')
        remember_me=attrs.get('remember_me','') or False
        user=auth.authenticate(email=email,password=password)
        if not user:
            raise AuthenticationFailed({'message':'Invalid Credential, Try Again'})
        
        if not user.is_active:
            raise AuthenticationFailed({'message':'Your Account is Banned'})

        if not user.is_verified:
            raise AuthenticationFailed({"message":"Your Account is not Verified"})

        return {
            'email':user.email,'username':user.username,'token':user.tokens(remember_me)
        }

class ResetPasswordSerailizer(serializers.Serializer):
    password=serializers.CharField(min_length=6,write_only=True)
    token=serializers.CharField(write_only=True)
    uidb64=serializers.CharField(write_only=True)
    class Meta:
        fields=['password','token','uidb64']
        
    def validate(self,attrs):
        try:
            password=attrs.get('password','')
            token=attrs.get('token','')
            uidb64=attrs.get('uidb64','')    

            id =force_str(urlsafe_base64_decode(uidb64)) 
            user=User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user,token):
                raise AuthenticationFailed("The reset token is invalid",401)
            user.set_password(password)
            user.save()
            return user
        except:
            raise AuthenticationFailed("The reset token is invalid",401)