# Generated by Django 4.0.6 on 2022-07-25 14:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_post_comments'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='image',
        ),
        migrations.RemoveField(
            model_name='user',
            name='avatar',
        ),
    ]
