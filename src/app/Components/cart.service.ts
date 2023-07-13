import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cart:any=[]

  getcartdetails(){
    return this.cart
  }

  add(item:any){
    this.cart.push(item)
  }
}
