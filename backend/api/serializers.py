from django.db import models
from django.db.models import fields
from django.db.models.fields.related import RelatedField
from .models import Favorite,UUID
from rest_framework import serializers
class UUIDSerializer(serializers.ModelSerializer):
    class Meta:
        model=UUID
        fields=['UUID','Platform']

class FavoriteSerializer(serializers.ModelSerializer):
    FavoriteUUID=UUIDSerializer(read_only=True,many=True)
    class Meta:
        model=Favorite
        fields=['FavoriteUUID']
        