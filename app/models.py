import uuid

from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=100)
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.name


class ProductCategory(models.Model):
    name = models.CharField(max_length=200)
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    price = models.TextField()
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='media/')
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Order(models.Model):
    products = models.ManyToManyField(Product)
    message = models.TextField()
    phone_number = models.CharField(max_length=100)
    address = models.TextField()
    payment_method = models.CharField(max_length=100)

    def __str__(self):
        return str(self.pk)


class CustomUser(AbstractUser):
    email = models.EmailField()
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
