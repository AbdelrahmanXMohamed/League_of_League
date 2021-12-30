from django import utils
from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import RegisterSerailizer,LoginSerailizer,ResetPasswordSerailizer
from django.contrib.sites.shortcuts import get_current_site
from .utils import Util
from django.urls import reverse
from .models import  MyToken, Verify,User
from django.contrib.auth import logout
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str,force_str, smart_bytes ,DjangoUnicodeDecodeError
from django.utils.http import  urlsafe_base64_encode,urlsafe_base64_decode
from .authentications import token_expire_handler, expires_in
import datetime;

# Create your views here.

class RegisterView(generics.GenericAPIView):
    
    serializer_class=RegisterSerailizer

    def post(self,request):
        user=request.data

        serializer=self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)

        user_instance=serializer.save()
        user_data=serializer.data
        token=Verify.objects.create(user=user_instance)
        token.save()
        token=token.key

        current_site=get_current_site(request).domain
        #relativeLink=reverse("email_verify")
        absurl='http://'+current_site+"/activate/"+str(token)
        email_body=f"Hi {user['username']} \n use Link below to verify your email \n {absurl}"
        data={'email_body': email_body,'email_subject':'Verify your email','email_to':user['email']}
        Util.send_email(data)
        return Response({'message':'Created successfully please check your Email to verify'},status=status.HTTP_201_CREATED)

class ValidLoginVeiw(generics.GenericAPIView):
    premission_classes=(IsAuthenticated,)
    def get(self,request):
        if request.auth:
            return Response({'expires_in':expires_in(request.auth)},status=status.HTTP_200_OK)

class LoginAPIView(generics.GenericAPIView):
    serializer_class=LoginSerailizer

    def post(self,request):
        print(request.data)
        serializer=self.serializer_class(data=request.data)
        
        serializer.is_valid(raise_exception=True)
        date=datetime.datetime.now().timestamp()+expires_in(MyToken.objects.get(key=serializer.data['token'])).total_seconds()
        print('success')
        return Response({'data':serializer.data,'expires':date},status=status.HTTP_200_OK)

class LogoutAPIView(generics.GenericAPIView):
    premission_classes=(IsAuthenticated,)
    def get(self,request):
        print(request.META)
        if request.user.is_authenticated:
            request.auth.delete()
            logout(request)
            return Response({'message':'Logout successfully'},status=status.HTTP_200_OK)

class VerifyEmail(generics.GenericAPIView):
    def get(self,request):
        token=request.GET.get('token')
        print(token)
        if not Verify.objects.filter(key=token).exists():
            return Response({"message":'Token does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        verify=Verify.objects.get(key=token)
        
        try:
            user=User.objects.get(id=verify.user.id)
            if user.is_verified:
                return Response({"message":"Already Activated"},status=status.HTTP_409_CONFLICT)
            user.is_verified=True
            user.save()

        except User.DoesNotExist:
            raise TypeError("User does not exist")
        
        return Response({"message":"Successfully Activated"},status=status.HTTP_200_OK)

class ForgetPasswordView(generics.GenericAPIView):
    def post(self,request):
        email=request.data['email']
        if not User.objects.filter(email=email).exists():
            return Response({"message":"User of this email doesn't exist"},status=status.HTTP_404_NOT_FOUND)
        user=User.objects.get(email=email)
        uidb64=urlsafe_base64_encode(smart_bytes(user.id)) 
        token=PasswordResetTokenGenerator().make_token(user)
        current_site=get_current_site(request).domain
        absurl='http://'+current_site+"/check_reset_password/"+uidb64+"/"+str(token)
        email_body=f"Hi {user.username} \nuse Link below to reset your password \n{absurl}"
        data={'email_body': email_body,'email_subject':'Reset your password','email_to':email}
        Util.send_email(data)
        return Response({"message":"Check your email for reset link"},status=status.HTTP_200_OK)

class CheckValidUserView(generics.GenericAPIView):
    def get(self,request,uidb64,token):
        try:
            
            id=urlsafe_base64_decode(uidb64)
            if not User.objects.filter(id=id).exists():
                return Response({"message":"User of this email doesn't exist"},status=status.HTTP_404_NOT_FOUND)
            user=User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user,  token):
                return Response({"message":"Token is invalid please request new one"},status=status.HTTP_401_UNAUTHORIZED)
            return Response({'token':token,'uidb64':uidb64},status=status.HTTP_200_OK)
        except DjangoUnicodeDecodeError :
                return Response({"message":"Invalid Link"},status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({"message":"Invalid Link"},status=status.HTTP_400_BAD_REQUEST)

class ResetPassowordView(generics.GenericAPIView):
    serializer_class=ResetPasswordSerailizer
    def patch(self,request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'message':'Password reset success'},status=status.HTTP_200_OK)