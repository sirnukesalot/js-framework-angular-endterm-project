import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Order} from "../Order";
import {ProductsService} from "../products.service";
import {Product} from "../Product";

@Component({
    selector: 'app-order',
    imports: [FormsModule, NgForOf, ReactiveFormsModule],
    templateUrl: './order.component.html',
    styleUrl: './order.component.css'
})
export class OrderComponent {
  order!: Order[];
  newOrder!: Order;
  products!: Product[]
  prod = new FormControl('')



constructor(private productsService: ProductsService) {
  this.newOrder = {
    fields: {
      address: '',
      payment_method: '',
      message: '',
      phone_number: '',
      products: this.products,
    }
  }
}
addOrder(){
  this.productsService.createOrder(this.newOrder).subscribe((order)=>{
    this.order = [order, ...this.order]
    alert('Order Created')
    this.newOrder = {} as Order
  })
}

}
