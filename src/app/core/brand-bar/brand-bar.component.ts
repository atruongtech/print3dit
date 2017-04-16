import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from '../../common/services/auth0/auth0.service';

@Component({
  selector: 'app-brand-bar',
  templateUrl: './brand-bar.component.html',
  styleUrls: ['./brand-bar.component.css']
})
export class BrandBarComponent implements OnInit {

  constructor(private auth: Auth
              ,private router: Router) { }

  public logout() {
    this.auth.logout();
    this.router.navigateByUrl("");
  }

  public login() {
    this.router.navigateByUrl("login");
  }


  ngOnInit() {
  }

}
