from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager
import binascii
import os
from django.utils.translation import gettext_lazy as _
# Create your models here.


class UserManager(BaseUserManager):
    # Create normal user
    def create_user(self,username,email,password=None):
        if username is None:
            raise TypeError("Users Should have a username")
        if email is None:
            raise TypeError("Users Should have a email")
        user=self.model(username=username,email=self.normalize_email(email))
        user.set_password(password)
        user.save()
        return user
    # Create super user
    def create_superuser(self,username,email,password=None):
        if password is None:
            raise TypeError("Password Can't be empty")
        user=self.create_user(username,email,password)
        user.is_superuser=True
        user.is_staff=True 
        user.save()
        return user

class User(AbstractBaseUser,PermissionsMixin):
    username=models.CharField(max_length=255,unique=True,db_index=True)
    email=models.EmailField(max_length=255,unique=True,db_index=True)
    is_verified=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']

    objects=UserManager()
    
    def __str__(self):
        return self.email
    def tokens(self,remember_me=False):
        token = MyToken.objects.create(user=self)
        token.is_remember_me=remember_me
        token.save()
        return str(token.key)

class MyToken(models.Model):
    """
    The default authorization token model.
    """
    key = models.CharField(_("Key"), max_length=40, primary_key=True)

    user = models.ForeignKey(
        User, related_name='user',
        on_delete=models.CASCADE, verbose_name="user"
    )
    created = models.DateTimeField(_("Created"), auto_now_add=True)
    
    is_remember_me=models.BooleanField(default=False)

    class Meta:
        verbose_name = _("Token")
        verbose_name_plural = _("Tokens")

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = self.generate_key()
        return super(MyToken, self).save(*args, **kwargs)

    def generate_key(self):
        return binascii.hexlify(os.urandom(20)).decode()

    def __str__(self):
        return self.key

class Verify(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    key= models.CharField(max_length=40,primary_key=True)

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = self.generate_key()
        return super(Verify, self).save(*args, **kwargs)

    def generate_key(self):
        return binascii.hexlify(os.urandom(20)).decode()

    def __str__(self):
        return self.key