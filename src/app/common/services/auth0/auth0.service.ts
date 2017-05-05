// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';

declare var require: any
// Avoid name not found warnings
let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class Auth {
  // Configure Auth0
  base_href: string;
  options: any = {
    auth: {
      redirectUrl: window.location.origin + '/login',
      responseType: "token",
    }
  }
  lock: any;
  environment: any;
  //Store profile object in auth class
  userProfile: any;

  constructor(private router: Router) {
    this.environment = environment;

    if (window.location.origin.includes("github")) {
      this.base_href = window.location.origin + "/" + this.environment.REPO_NAME;
    } else {
      this.base_href = window.location.origin;
    }
    this.options.auth.redirectUrl = this.base_href + "/login";
    this.lock = new Auth0Lock('sDfOrQe1VAPSBGViYgUGJUHXyzSgEgMC', 'print3dstats.auth0.com', this.options)

    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.refreshProfile();
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    return tokenNotExpired()
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    // Remove stored user info from localStorage
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  }

  public refreshProfile() {
    let token = localStorage.getItem("id_token");
    this.lock.getProfile(token, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        // TODO check if there is an app_user_id set in app_metadata
        // TODO if no app_user_id, call service to set it and get back updated profile info

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
  }
}
