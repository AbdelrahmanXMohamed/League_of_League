from django.db import models
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from .models import User
from django.contrib import auth

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
            raise AuthenticationFailed('Invalid Credential, Try Again')
        
        if not user.is_active:
            raise AuthenticationFailed('Your Account is Banned')

        if not user.is_verified:
            raise AuthenticationFailed("Your Account is not Verified")

        return {
            'email':user.email,'username':user.username,'token':user.tokens(remember_me)
        }

class ResetPasswordSerailizer(serializers.ModelSerializer):
    pass