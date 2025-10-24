import {Category} from "./Category";
import {Brand} from "./Brand";

export interface Product{
  fields : {
    name: string,
    category: Category,
    description: string,
    brand: Brand,
    price: number,
    image: string,
    likes: number,
    pk:number
  }
}
