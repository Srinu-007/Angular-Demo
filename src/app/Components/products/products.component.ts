import { Component,OnInit } from '@angular/core';
import { AdminserviceService } from '../admin/adminservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  d:any;
  filepath:any;
  constructor(public api:AdminserviceService){}
  ngOnInit(): void {
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
