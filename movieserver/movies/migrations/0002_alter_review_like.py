# Generated by Django 3.2.12 on 2022-05-20 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='like',
            field=models.BooleanField(default=False),
        ),
    ]
