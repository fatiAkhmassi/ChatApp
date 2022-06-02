import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsSignedGuard implements CanActivate {
constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if(localStorage.getItem('token')==null){
        this.router.navigateByUrl("/auth/login")
        return false
      }
    return true;

  }
  
}
