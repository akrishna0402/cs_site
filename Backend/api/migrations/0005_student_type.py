# Generated by Django 3.2.9 on 2023-04-19 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_student'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='type',
            field=models.CharField(choices=[('UG', 'UG'), ('PG', 'PG')], default='UG', max_length=20),
            preserve_default=False,
        ),
    ]
