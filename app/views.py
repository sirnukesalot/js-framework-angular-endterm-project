from django.contrib.auth import authenticate
from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from rest_framework import generics, permissions
from django.core import serializers
from rest_framework.authtoken.models import Token
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

from .models import Product, ProductCategory, Brand, Order
from .serializers import ProductSerializer, ProductCategorySerializer, BrandSerializer, OrderSerializer, UserSerializer


def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        data = serializers.serialize('json', products)
        return HttpResponse(data, content_type='application/json')
    else:
        return HttpResponse(status=400)


def order_list(request):
    if request.method == 'GET':
        orders = Order.objects.all()
        data = serializers.serialize('json', orders)
        return HttpResponse(data, content_type='application/json')
    else:
        return HttpResponse(status=400)


class BrandListView(generics.ListCreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


class BrandProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        brand = self.kwargs['pk']

        return Product.objects.filter(brand=brand)


class CategoryProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category = self.kwargs['pk']

        return Product.objects.filter(category=category)


class ProductCategoryView(generics.ListCreateAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer


class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class ProductDetail(RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        id = self.kwargs['pk']

        return Product.objects.filter(id=id)



class UserLoginView(APIView):
    def post(self, request):
        user = authenticate(username=request.data.get('username'), password=request.data.get('password'))
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=401)
