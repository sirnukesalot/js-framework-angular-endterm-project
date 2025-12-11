import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {Product} from "../Product";
import {ProductsService} from "../products.service";
import {NgForOf, NgIf} from "@angular/common";
import {Clipboard} from '@angular/cdk/clipboard'

@Component({
    selector: 'app-products',
    imports: [
        RouterLink,
        RouterOutlet,
        NgIf,
        NgForOf
    ],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent {
  products!: Product[];
  productss!: Product;
  likes: number = 0;

  loaded: boolean = false;
  constructor(private productService: ProductsService,private clipboard: Clipboard,private route: ActivatedRoute) {
  }
  ngOnInit(): void{
    this.getProducts();

  }
  getProducts(){
    this.loaded=false;
    this.productService.getProducts().subscribe((products)=>{
      this.products=products;
      this.loaded = true;
    })
  }
  like(product: any){
    product.fields.likes++;
    console.log(product)
    this.productService.updateLikes(product.pk, product).subscribe((product) => {
      // this.products.fields.likes = this.likes++
      this.getProducts()
    });
  }
  copyName(product: Product){
    this.clipboard.copy(product.fields.name)
    window.alert('Product name is on clipboard!')

  }
  updateLikes(product: Product){
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'))
    })
  }

  // likeProduct(product: Product): void {
  // this.productService.updateLikes(product).subscribe(updatedProduct => {
  //   product.fields.likes = updatedProduct.fields.likes;
  // });
  // }
  }


