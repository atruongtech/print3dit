import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrintsService, Printer } from '../services/mockprints/mockprints.service';
import { Auth } from '../../common/services/auth0/auth0.service';

@Component({
  selector: 'app-printer-library',
  templateUrl: './printer-library.component.html',
  styleUrls: ['./printer-library.component.css']
})
export class PrinterLibraryComponent implements OnInit {

  app_user_id: number;

  constructor(private auth: Auth 
              ,private router: Router) { }

  ngOnInit() {
    if (!this.auth.authenticated()) {
      // send user back to home page if not signed in.
      this.router.navigateByUrl("");
    }
    if (localStorage.getItem("profile") != null ) {
      let userProfile: any = localStorage.getItem("profile");
      this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
    }
  }

}
