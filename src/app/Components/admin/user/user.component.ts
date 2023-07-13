import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  d:any;
  user:any;
  msg:any;
  clr:any;
  updatemsg:any;
  updtdet={
    u_id:"",
    u_fname:"",
    u_lname:"",
    u_email:"",
    u_phn:""
  }

  constructor(public api:AdminserviceService){}
ngOnInit(): void {
  this.getdetails()
   }

   getdetails(){
    this.api.getdetails().subscribe((result:any)=>{
     console.log(result)
     this.d=result.data;
     console.log(this.d);
    })
    }

    del(id:any){
      if(confirm("Are you sure to delete?")){
      console.log(id);
      const data = new FormData()
      data.append("u_id",id)
      this.api.del(data).subscribe((result:any)=>{
        console.log(result)
        this.msg=result.message;
        if(result.status===1){
        this.getdetails();
        }
      })
    }
  } 
  edit(id:any){
    console.log(id);
    this.user=this.d.filter((b:any)=>b.user_id===id);
    console.log(this.user);
    this.updtdet.u_id=this.user[0].user_id;
    this.updtdet.u_fname=this.user[0].user_fname;
    this.updtdet.u_lname=this.user[0].user_lname;
    this.updtdet.u_email=this.user[0].user_email;
    this.updtdet.u_phn=this.user[0].user_phone;
    }

  update(){
    const data= new FormData()
   data.append("user_id",this.updtdet.u_id)
   data.append("user_fname",this.updtdet.u_fname)
   data.append("user_lname",this.updtdet.u_lname)
  data.append("user_email",this.updtdet.u_email)
  data.append("user_phone",this.updtdet.u_phn) 
  this.api.update(data).subscribe((result:any)=>{
    console.log(result)
    if(result.status===1){
    this.updatemsg=result.message;
    this.clr="green";
    this.getdetails();
    }
  })
  }
}
