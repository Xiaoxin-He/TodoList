import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

//route the user to the login page
  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationService, private router: Router) {

   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if(this.hardcodedAuthenticationService.isUserLoggedIn())
    
    return true;//only when the user is login
    
    //go to the login page is not login
    this.router.navigate(['login'])
    return false;
  }
}
