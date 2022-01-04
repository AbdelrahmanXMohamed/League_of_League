from django.db import models
from authentication.models import User
    
class UUID(models.Model):
    UUID=models.CharField(max_length=78)
    Platform=models.CharField(max_length=10)

class Favorite(models.Model):
    User=models.OneToOneField(User ,on_delete=models.CASCADE)
    FavoriteUUID=models.ManyToManyField(UUID,related_name="FavoriteID")
