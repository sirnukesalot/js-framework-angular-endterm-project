import { Routes } from '@angular/router';
import {AboutComponent} from "../about/about.component";
import {ProductsComponent} from "../products/products.component";
import {OrderComponent} from "../order/order.component";
import {CategoriesComponent} from "../categories/categories.component";
import {BrandsComponent} from "../brands/brands.component";
import {CategoryProductsComponent} from "../category-products/category-products.component";
import {BrandsProductsComponent} from "../brands-products/brands-products.component";

export const routes: Routes = [
  {path:'',redirectTo:'app',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'categories',component: CategoriesComponent},
  {path:'brands',component:BrandsComponent},
  {path:'categories/:id/products',component: CategoryProductsComponent},
  {path:'brands/:id/products',component:BrandsProductsComponent},
  {path:'order',component:OrderComponent}


];
