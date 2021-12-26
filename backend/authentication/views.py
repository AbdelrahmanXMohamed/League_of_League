from django import utils
from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import RegisterSerailizer,LoginSerailizer
from django.contrib.sites.shortcuts import get_current_site
from .utils import Util
from django.urls import reverse
from .models import  MyToken, Verify,User
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

class LoginAPIView(generics.GenericAPIView):
    serializer_class=LoginSerailizer

    def post(self,request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

class LogoutAPIView(generics.GenericAPIView):
    premission_classes=(IsAuthenticated,)
    def get(self,request):
        print(request.META)
        print(request.META.get("HTTP_AUTHORIZATION",''))

        try:
            token=MyToken.objects.get(key=request.headers.get('Token'))
            token.delete()
        except MyToken.DoesNotExist:
            return Response('Token does not exist', status=status.HTTP_400_BAD_REQUEST)
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
    pass
class ResetPassowordView(generics.GenericAPIView):
    pass