from django.contrib import admin

from .models import MyToken,User, Verify

# Register your models here.
admin.site.register(User)
admin.site.register(MyToken)
admin.site.register(Verify)