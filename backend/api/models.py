from django.db import models
from django.contrib.auth.models import AbstractBaseUser,AbstractUser,PermissionsMixin,BaseUserManager

class User(AbstractUser):
    pass

    def __str__(self):
        return self.username
    
class UUID(models.Model):
    UUID=models.CharField(max_length=78)

class Favorite(models.Model):
    User=models.ForeignKey(User, on_delete=models.CASCADE)
    FavoriteUUID=models.ManyToManyField(UUID,related_name="Favorite")
