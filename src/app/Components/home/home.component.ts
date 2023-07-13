import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 public carous=[
   {img:"assets/flipkart/3.jpg",alt:"1"},
   {img:"assets/flipkart/2.jpg",alt:"2"},
   {img:"assets/flipkart/1.jpg",alt:"3"},
   {img:"assets/flipkart/4.jpg",alt:"4"},
   {img:"assets/flipkart/5.jpg",alt:"5"}
 ]
 public path=[
  {path:"/Priducts"}
 ]
}
