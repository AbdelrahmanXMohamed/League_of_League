from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    is_active=models.BooleanField(default=False)
    pass
class UUID(models.Model):
    UUID=models.CharField(max_length=78)

class Favorite(models.Model):
    User=models.ForeignKey(User, on_delete=models.CASCADE)
    FavoriteUUID=models.ManyToManyField(UUID,related_name="Favorite")
