import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from "../models/Product";
import { Category } from '../models/Category';
import { map } from 'rxjs/operators'; 
import { catchError } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private apiUrl = 'https://api.escuelajs.co/api/v1/products'
  private apiUrl2 = 'https://api.escuelajs.co/api/v1/categories'
  

  constructor(private http: HttpClient){}

  // getAllProducts(query: string): Observable<Product[]> {
  //   const params = new HttpParams().set('title', query)
  //   return this.http.get<Product[]>(this.apiUrl, {params})
  // }
  getAllProducts(query?: string): Observable<Product[]> { 
    let params = new HttpParams();

    if (query && query.trim().length > 0) { 

      params = params.set('title', query); 
    }

   
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  getProductById(id: string): Observable<Product>{
     const params = new HttpParams().set('id', id);
    
    return this.http.get<Product>(this.apiUrl, {params}).pipe(
      catchError(error => {
        console.error('HTTP Error fetching Product details:', error);
        return throwError(() => new Error(`Failed to load details for ID ${id}. Server responded with status ${error.status}`));
      })
    );
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl2)
  }

  getProductsByCategory(productId: string): Observable<Product[]>{
     const params = new HttpParams().set('id', productId);
     const url = `${this.apiUrl2}/${productId}/products`;
    return this.http.get<Product[]>(url).pipe(
    catchError(error => {
      console.error('Error loading products from category:', error);
      return throwError(() => new Error(`Failed to load products for category ${productId}`));
    })
  );
  }
}
