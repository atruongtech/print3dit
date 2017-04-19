import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';

import { Auth } from '../auth0/auth0.service';

@Injectable()
export class AuthguardService implements CanActivate{

  constructor(private auth: Auth
              , private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.authenticated() || !localStorage.getItem("profile")) {
      this.router.navigateByUrl("login");
    }
    if (!this.checkForUserId()) {
      return false;
    }
    return true;
  }

  checkForUserId(): boolean{
    let profile = localStorage.getItem("profile");
    if (profile) {
      let profileObject = JSON.parse(profile);
      if (profileObject.app_metadata.app_user_id) {
        return true;
      }
    }
    return false;
  }

}
