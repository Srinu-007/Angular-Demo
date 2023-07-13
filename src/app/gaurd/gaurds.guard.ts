import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaurdsGuard implements CanActivate {
  constructor(public r:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    if(!localStorage.getItem("Logdetails")){
      this.r.navigate(["/signup"])
      return false;
    }else{
      return true;
    }
  } 
}
