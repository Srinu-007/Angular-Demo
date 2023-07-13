import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
   public url="http://ilandertech.com/api/index.php/welcome/"
  constructor(public http:HttpClient) { } 
  
  submit(data:any){
  return this.http.post(this.url+"AddStuRegister",data)
  } 

  login(data:any){
    return this.http.post(this.url+"StuLogin",data)
  } 


}
