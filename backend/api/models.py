from django.db import models
from authentication.models import User
    
class UUID(models.Model):
    UUID=models.CharField(max_length=78)

class Favorite(models.Model):
    User=models.ForeignKey(User, on_delete=models.CASCADE)
    FavoriteUUID=models.ManyToManyField(UUID,related_name="Favorite")
