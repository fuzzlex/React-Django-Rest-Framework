from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=100)
    desc = models.CharField(max_length=500)
    img = models.CharField(max_length=500)
    price = models.CharField(max_length=500)
    category = models.CharField(max_length=500)
    
    def __str__(self):
        return self.title