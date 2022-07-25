from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    # avatar = models.ImageField()
    def __str__(self):
        return self.name

class Post(models.Model):
    likes = models.IntegerField(default=0)
    comments = models.TextField(default='')
    description = models.TextField()
    # image = models.ImageField()
    def __str__(self):
        return self.likes


