import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/api/apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public logdetails:any={
    email:"",
    pwd:""
  }

  msg:any;
  clr={red:false,green:false};
  constructor(public api:ApiserviceService,public route:Router){}

  login(){
  console.log(this.logdetails);
  const data=new FormData()
  data.append("userEmail",this.logdetails.email)
  data.append("userPassword",this.logdetails.pwd)

  this.api.login(data).subscribe((result:any)=>{
    console.log(result)
    if(result.status === 0){
     this.msg=result.message 
     this.clr={red:true,green:false}
     setInterval(()=>{
      this.route.navigate(["/dashboardhome"])
    },3000);
    }
    else{
      this.msg="";
      this.clr={red:false,green:true}
    }
  })

  localStorage.setItem("Logdetails",JSON.stringify(this.logdetails));
}
}
