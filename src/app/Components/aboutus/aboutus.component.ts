import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
 public cat=[
  {name:"Mobiles & Tabs",img:"samsung1",path:"/mobiles"},
  {name:"Electronics",img:"electro",path:"/electronics"},
  {name:"Fashion",img:"fashion",path:"/fashion"},
  {name:"Beauty",img:"beauty",path:"/beauty"},
  {name:"Home and Kitchen",img:"home",path:"/kitchen"},
  {name:"Furniture",img:"furni",path:"/furniture"},
  {name:"Grocery",img:"grocery",path:"/grocery"}
 ]
}
