import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./Product";
import {Category} from "./Category";
import {Brand} from "./Brand";
import {Order} from "./Order";
import {NestedProduct} from "./NestedProduct";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:8000/api'

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiUrl}/categories`)
  }

  getCategoriesProduct(catId: number): Observable<NestedProduct[]>{
    return this.http.get<NestedProduct[]>(`${this.apiUrl}/categories/${catId}/products`)
  }
  getBrands(): Observable<Brand[]>{
    return this.http.get<Brand[]>(`${this.apiUrl}/brands`)
  }

  getBrandsProduct(brandId: number):Observable<NestedProduct[]>{
    return this.http.get<NestedProduct[]>(`${this.apiUrl}/brands/${brandId}/products`)
  }
  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}/orders`)
  }
  createOrder(newOrder: Order):Observable<Order>{
    return this.http.post<Order>(`${this.apiUrl}/orders`,newOrder)
  }

  updateLikes(id: number, product: any):Observable<Product>{
    console.log(product)
    return this.http.patch<Product>(`${this.apiUrl}/products/${id}/`, product.likes+1)
  }
  // updateLikes(product: Product): Observable<Product> {
  //   const updated = { ...product, fields: { ...product.fields, likes: product.fields.likes + 1 } };
  //   return this.http.put<Product>(`${this.apiUrl}${product.fields.pk}/`, updated);
  // }
}
