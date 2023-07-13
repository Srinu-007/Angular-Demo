import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit{
  a:any;
  signupdetails:any;
  b:any;
  ngOnInit(): void {
     this.a=localStorage.getItem("Customer");
     this.signupdetails=JSON.parse(this.a);
     this.b=[this.signupdetails]
     console.log(this.b);
 }
}
