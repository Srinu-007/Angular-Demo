import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  public url="http://ilandertech.com/api/index.php/welcome/"
  constructor(public http:HttpClient) { }

   getdetails(){
   return this.http.get(this.url+"getStuUsers")
  }
  del(data:any){
    return this.http.post(this.url+"DeleteStuUsers",data)
  } 
  update(data:any){
    return this.http.post(this.url+"updateStuUsers",data)
  } 
  add(data:any){
    return this.http.post(this.url+"AddStuDesc",data)
  }
  get(){
    return this.http.get(this.url+"GetStuDesc")
  }
  delproduct(data:any){
    return this.http.post(this.url+"DeleteStuDesc",data)
  }
}

