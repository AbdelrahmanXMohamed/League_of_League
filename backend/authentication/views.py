from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.response import Response
from .serializers import RegisterSerailizer
from django.contrib.sites.shortcuts import get_current_site
# Create your views here.

class RegisterView(generics.GenericAPIView):
    
    serializer_class=RegisterSerailizer

    def post(self,request):
        user=request.data
        serializer=self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data=serializer.data
        current_site=get_current_site(request)
        relativeLink=''
        data={'domain': current_site.domain,}
        return Response(user_data,status=status.HTTP_201_CREATED)

class VerifyEmail(generics.GenericAPIView):
    def get(self):
        pass