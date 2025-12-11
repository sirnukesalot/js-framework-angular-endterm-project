import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Product} from "../Product";
import {ProductsService} from "../products.service";
import {ActivatedRoute} from "@angular/router";
import {NestedProduct} from "../NestedProduct";

@Component({
    selector: 'app-category-products',
    imports: [
        NgForOf,
        NgIf
    ],
    templateUrl: './category-products.component.html',
    styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
products!: NestedProduct[];
constructor(private route: ActivatedRoute,private productService:ProductsService) {
}

ngOnInit(){
  this.getCategoriesProduct()
}

getCategoriesProduct(){
  this.route.paramMap.subscribe((params)=>{
    const catId = Number(params.get('id'));
    this.productService.getCategoriesProduct(catId).subscribe((products)=>{
      this.products=products;
    })
  })
}
}

