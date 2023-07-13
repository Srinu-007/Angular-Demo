import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.scss']
})
export class DashboardhomeComponent implements OnInit {
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
