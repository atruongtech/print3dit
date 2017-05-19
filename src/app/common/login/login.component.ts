import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import { Auth } from '../services/auth0/auth0.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: Auth
              ,private router: Router) { }

  private logInOrRedirect() {
   
  }

  ngOnInit() {
    let thisInstance = this;
    let state: string;
    let userProfile: any;
    setTimeout(function(){
        let app_user_id = null;

        if (state != "complete" && !thisInstance.auth.authenticated()) {
          thisInstance.auth.login();
        }
        else
        {
          if (localStorage.getItem("profile") != null ) {
            userProfile = JSON.parse(localStorage.getItem("profile"));
          }
          else {
            console.error('Auth0 profile not set');
            this.router.navigate(['/error']);
          }

          if (!userProfile.app_metadata || !userProfile.app_metadata.app_user_id) {
            thisInstance.auth.setAppUserId(userProfile.user_id)
                      .subscribe(
                        res => {
                          localStorage.setItem("profile", JSON.stringify(res));
                          thisInstance.router.navigateByUrl("prints");
                        },
                        error => {
                          console.error(error);
                          thisInstance.router.navigate(['/error']);
                        }
                      )
          }
          else {
            thisInstance.router.navigateByUrl("prints");
          }
        }
      }, 1000);
    
  }

}
