from django.db import models

# Create your models here.


class Recipe(models.Model):
  title = models.CharField('Title', max_length=200)
  ingredients = models.TextField(max_length=1600)
  directions = models.TextField(max_length=2400)
  img = models.ImageField(upload_to ='uploads/', null=True, blank=True)
  created = models.DateTimeField(auto_now_add=True)