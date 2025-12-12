import { Component } from '@angular/core';
import { ListService } from '../service/list.service';
import {Category} from "../models/Category";

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
  isLoading=false;
  constructor(private listService: ListService) {
  }

  ngOnInit(){
    this.getCategories();
    this.isLoading=true;
  }
  getCategories(){
    this.listService.getCategories().subscribe((categories)=>{
      this.categories=categories;
      this.isLoading=false;
    })
  }
}
