import { Component,Input } from '@angular/core';
import {ActivatedRoute,RouterModule} from "@angular/router";
import { Product } from '../models/Product';

import {Clipboard} from '@angular/cdk/clipboard'

@Component({
    selector: 'app-products',
    imports: [RouterModule],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent {
   @Input() product!: Product;

  constructor(){}


  // copyName(product: Product){
  //   this.clipboard.copy(product.title)
  //   window.alert('Product name is on clipboard!')

  // }

  }


