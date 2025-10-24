import {Category} from "./Category";
import {Brand} from "./Brand";

export interface NestedProduct {
  name: string,
  description:string,
  price: number,
  image:string,
  brand:Brand,
  category: number,
}
