from django.urls import path
from .views import product_list, order_list, BrandListView, ProductCategoryView, BrandProductListView, \
    CategoryProductListView, ProductDetail

urlpatterns = [
    path('products/', product_list, name='product_list'),
    path('brands/', BrandListView.as_view()),
    path('brands/<int:pk>/products/',  BrandProductListView.as_view()),
    path('categories/<int:pk>/products/', CategoryProductListView.as_view()),
    path('categories/',ProductCategoryView.as_view()),
    path('orders/', order_list, name='order_list'),
    path('products/<int:pk>/',ProductDetail.as_view())


]