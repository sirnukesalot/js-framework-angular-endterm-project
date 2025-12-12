import { Routes } from '@angular/router';
import {AboutComponent} from "../about/about.component";
import {ProductsComponent} from "../products/products.component";
import {CategoriesComponent} from "../categories/categories.component";


import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import {redirectUnauthorizedTo } from "@angular/fire/auth-guard"
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {path:'',redirectTo:'app',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'products',component:ListComponent},
  {path:'categories',component: CategoriesComponent},
  {path:'categories/:id/products',component: ListComponent},
   { path: "login", component: LoginComponent},
  {path:"register",component:SignupComponent},
  { path:"profile", component:ProfileComponent, canActivate:[authGuard]}


];
