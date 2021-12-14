# from djoser.serializers import UserCreateSerializer
# from django.contrib.auth import get_user_model
# User=get_user_model()
# class UserCreateSerializer(UserCreateSerializer):
#     class Meta(UserCreateSerializer.Meta):
#         model=User
#         fields=('id','email','username','password')

from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields="__all__"