import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
public header = [
  {name:"Home",path:"/",sub:[]},
  {name:"Category",path:"/About",sub:[]},
  {name:"Products",path:"/Products",sub:[]},
  {name:"Filter",path:"/filter/electronics",sub:[
    {name:"New Arrival",path:"/filter/electronics"},
    {name:"Check",path:"/filter/kitchen/:id"},
    {name:"Best deals",path:"/filter/furniture"},
  ]},
  {name:"Login",path:"/Login",sub:[]},
]
cdet:any;
constructor(public cart:CartService){}
ngOnInit(): void {
 this.cdet= this.cart.getcartdetails()
 console.log(this.cdet);
}
}
