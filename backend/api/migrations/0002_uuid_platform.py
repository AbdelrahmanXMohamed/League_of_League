# Generated by Django 4.0 on 2022-01-02 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='uuid',
            name='Platform',
            field=models.CharField(default='', max_length=10),
        ),
    ]