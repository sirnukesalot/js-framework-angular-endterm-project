import { Component } from '@angular/core';
import {Brand} from "../Brand";
import {ProductsService} from "../products.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  brands!: Brand[];
  constructor(private brandService: ProductsService) {
  }
  ngOnInit(){
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe((brands)=>{
      this.brands=brands;
    })
  }

}
