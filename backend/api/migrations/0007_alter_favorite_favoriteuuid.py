# Generated by Django 4.0 on 2022-01-03 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_favorite_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favorite',
            name='FavoriteUUID',
            field=models.ManyToManyField(null=True, related_name='FavoriteID', to='api.UUID'),
        ),
    ]