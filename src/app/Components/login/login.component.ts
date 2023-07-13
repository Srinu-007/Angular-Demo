import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/api/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
public customer:any={
  fname:"",
  lname:"",
  mnum:"",
  email:"",
  pwd:""
}
msg:any;
clr={red:false,green:false}
constructor(public api:ApiserviceService){

}

submit(){
  const data= new FormData()
  data.append("fname",this.customer.fname),
  data.append("lname",this.customer.lname),
  data.append("mnum",this.customer.mnum),
  data.append("email",this.customer.email),
  data.append("pwd",this.customer.pwd) 
   
 this.api.submit(data).subscribe((result:any)=>{
  console.log(result);
  if(result.status === 0){
    this.msg=result.message 
    this.clr={red:true,green:false}
   }
   else{
     this.msg="";
     this.clr={red:false,green:true}
   }
 })
 localStorage.setItem("Customer",JSON.stringify(this.customer));
}
}
