# Generated by Django 4.0 on 2021-12-22 14:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_verify'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='verify',
            name='is_verified',
        ),
    ]
