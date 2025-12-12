import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink,RouterModule,Router} from '@angular/router';
import { ListService } from '../../service/list.service';
import { Product } from "../../models/Product";  

import { FormsModule } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ProductsComponent } from '../../products/products.component';



@Component({
  selector: 'app-list',
  imports: [RouterModule, FormsModule, ProductsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  errorMessage = '';
  searchText = '';
  isLoading = false;
  

  constructor(private list_service: ListService,private route: ActivatedRoute,private router: Router){
  }
   ngOnInit(){
    this.route.queryParams.pipe(switchMap(params => {
      this.isLoading = true;
      this.errorMessage= '';
      this.products = [];
      

      const query = params['q'];
      this.searchText = query || '';

      return this.list_service.getAllProducts(query);
      
    }),
    catchError(err => {
      this.errorMessage = "Failed to fetch data";
      this.isLoading = false;
      return [];
    })
    ).subscribe(data => {
      this.products = data;
      this.isLoading = false;
    });

    this.getProductsByCategories();
    }

    onSearch(){
      this.router.navigate([],{
        relativeTo: this.route,
        queryParams: {q: this.searchText},
        queryParamsHandling: 'merge'
      });
    }

    getProductsByCategories(){
      this.route.paramMap.subscribe((params)=>{
        const id = Number(params.get('id'))
        this.list_service.getProductsByCategory('id').subscribe((products)=>{
          this.products = products
        })
      })
    }


}
