from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self, username,email,password=None,**extra_fields):
        if not email:
           raise ValueError ("User must have an email address")
        email=self.normalize_email(email)
        user = self.model(email=email,username=username,**extra_fields)
        user.set_password(password)
        user.save()

        return user
class User(AbstractBaseUser,PermissionsMixin):
    email=models.EmailField(max_length=255,unique=True)
    username=models.CharField(max_length=255)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    
    objects = UserAccountManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=["username"]
    def __str__(self):
        return self.username
    
class UUID(models.Model):
    UUID=models.CharField(max_length=78)

class Favorite(models.Model):
    User=models.ForeignKey(User, on_delete=models.CASCADE)
    FavoriteUUID=models.ManyToManyField(UUID,related_name="Favorite")
