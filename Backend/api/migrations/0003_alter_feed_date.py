# Generated by Django 3.2.9 on 2023-04-07 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_feed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feed',
            name='date',
            field=models.DateField(default=0),
        ),
    ]
