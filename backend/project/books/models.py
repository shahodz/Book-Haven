from django.db import models

# Create your models here.

class Book(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    image = models.URLField()
    description = models.CharField(max_length=100000)
    year = models.IntegerField()
    publisher = models.CharField(max_length=100)
    ISBN = models.CharField(max_length=100)
    edition = models.CharField(max_length=100)
    genre  = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    available = models.BooleanField(default=True)

def __str__(self):
    return self.name