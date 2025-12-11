import { Component } from '@angular/core';
import {ProductsService} from "../products.service";
import {Category} from "../Category";

import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-categories',
    imports: [
    RouterLink
],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories!: Category[]
  constructor(private categoryService: ProductsService) {
  }

  ngOnInit(){
    this.getCategories()
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((categories)=>{
      this.categories=categories;
    })
  }
}
