import { Component } from '@angular/core';
import {NestedProduct} from "../NestedProduct";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products.service";


@Component({
    selector: 'app-brands-products',
    imports: [],
    templateUrl: './brands-products.component.html',
    styleUrl: './brands-products.component.css'
})
export class BrandsProductsComponent {
  products!: NestedProduct[];
  constructor(private route: ActivatedRoute,private productService:ProductsService) {
  }

  ngOnInit(){
    this.getBrandsProduct()
  }

  getBrandsProduct(){
    this.route.paramMap.subscribe((params)=>{
      const brandId = Number(params.get('id'));
      this.productService.getBrandsProduct(brandId).subscribe((products)=>{
        this.products=products;
      })
    })
  }
}
