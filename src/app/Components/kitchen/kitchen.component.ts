import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../admin/adminservice.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit{
id:any;
product:any;
d:any;
filepath:any;
  constructor(public active:ActivatedRoute,public api:AdminserviceService,public cart:CartService){}
  ngOnInit(): void {
    this.id=this.active.snapshot.paramMap.get("id");
    console.log(this.id)
    this.get()
  }
  get(){
    this.api.get().subscribe((result:any)=>{
      console.log(result);
      this.d=result.data;
      this.filepath=result.filepath;
      console.log(this.d);
      this.product=this.d.filter((a:any)=>a.d_id===this.id)
      console.log(this.product);
    })
  }

     addtocart(x:any){
      this.cart.add(x)
      console.log(x)
     }
}
