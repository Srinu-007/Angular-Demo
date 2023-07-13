import { Component,OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import { AdminserviceService } from '../admin/adminservice.service';
AdminserviceService
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cdet:any;
  d:any;
  filepath:any;
  constructor(public cart:CartService,public api:AdminserviceService){}
  ngOnInit(): void {
    this.cdet= this.cart.getcartdetails()
    console.log(this.cdet);
    this.get();
   }
   get(){
    this.api.get().subscribe((result:any)=>{
      console.log(result);
      this.d=result.data;
      console.log(this.d);
      this.filepath=result.filepath;
    })
  }
}
