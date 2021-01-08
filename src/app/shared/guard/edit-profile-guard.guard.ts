import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EditProfileGuardGuard implements CanActivate {
constructor(private auth:AuthService , private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let isLoggedIn:boolean = this.auth.isAuthenticated();
     if (!isLoggedIn) {
       this.router.navigate(['/user/login']);
       return isLoggedIn
     }
      return isLoggedIn;
  }
}
