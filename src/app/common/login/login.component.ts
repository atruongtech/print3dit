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
    setTimeout(function(){
        if (state != "complete" && !thisInstance.auth.authenticated()) {
          thisInstance.auth.login();
        }
        else
        {
          thisInstance.router.navigateByUrl("prints");
        }
      }, 1000);
    
  }

}
