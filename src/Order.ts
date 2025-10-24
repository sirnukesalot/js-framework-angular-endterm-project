import {Product} from "./Product";

export interface Order{
  fields : {
    message: string,
    products: Product[],
    phone_number: string,
    address: string,
    payment_method: string,
  }
}
