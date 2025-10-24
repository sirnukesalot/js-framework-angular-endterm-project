from django.contrib import admin
from .models import Brand,Product,ProductCategory,Order
# Register your models here.

admin.site.register(Brand)
admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(Order)
