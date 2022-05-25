# Generated by Django 3.2.12 on 2022-05-25 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_customcard'),
    ]

    operations = [
        migrations.AddField(
            model_name='customcard',
            name='left_color',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customcard',
            name='right_color',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
