import { Component,OnInit } from '@angular/core';
import { AdminserviceService } from '../admin/adminservice.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit{
  pdetails={
    p_name:"",
    p_desc:"",
    p_img:""
  }

  constructor(public api:AdminserviceService){}
  clr="green";
  msg:any;
  dltmsg:any; 
d:any;
filepath:any;
ngOnInit(): void {
  this.get()
}
get(){
  this.api.get().subscribe((result:any)=>{
    console.log(result);
    this.d=result.data;
    this.filepath=result.filepath;
    console.log(this.d);
  })
}
uploadimg(event:any){
  // console.log(event)
  // console.log(event.target)
  // console.log(event.target.files)
  // console.log(event.target.files[0])
  this.pdetails.p_img=event.target.files[0];
}

add(){
  const data=new FormData()
  data.append("d_name",this.pdetails.p_name)
  data.append("d_desc",this.pdetails.p_desc)
  data.append("d_img",this.pdetails.p_img)
  this.api.add(data).subscribe((result:any)=>{
    console.log(result);
    this.dltmsg="";
    if(result.status===1){
      this.msg=result.message;
      this.get()
    }
  })
  console.log(this.pdetails)
 } 
 delproduct(id:any){
  if(confirm("Are you sure to delete?")){
  console.log(id)
  const data = new FormData()
  data.append("d_id",id)
  this.api.delproduct(data).subscribe((result:any)=>{
    console.log(result)
    if(result.status === 1){
     this.dltmsg=result.message;
     this.get()
    }
  })
}
}
}
