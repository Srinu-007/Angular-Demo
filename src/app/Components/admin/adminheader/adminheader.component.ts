import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent implements OnInit{
  A:any;
  parseddetails:any;
  constructor(public route:Router){}
  ngOnInit(): void{
      this.A=localStorage.getItem("Logdetails");
      this.parseddetails=JSON.parse(this.A);
      console.log(this.parseddetails);
  }
  
  logout(){
   this.route.navigate(["/admin"])
   localStorage.clear();
  }
}
