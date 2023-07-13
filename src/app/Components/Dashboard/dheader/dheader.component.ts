import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dheader',
  templateUrl: './dheader.component.html',
  styleUrls: ['./dheader.component.scss']
})
export class DheaderComponent implements OnInit{
  A:any;
  parseddetails:any;
  constructor(public route:Router){}
  ngOnInit(): void{
      this.A=localStorage.getItem("Logdetails");
      this.parseddetails=JSON.parse(this.A);
      console.log(this.parseddetails);
  }
  logout(){
   this.route.navigate(['/signup'])
   localStorage.clear();
  }
}
