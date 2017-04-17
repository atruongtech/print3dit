import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrintersService, PrinterLibraryView } from '../services/mockprinters/mockprinters.service';
import { Auth } from '../../common/services/auth0/auth0.service';

@Component({
  selector: 'app-printer-library',
  templateUrl: './printer-library.component.html',
  styleUrls: ['../../common/libraries/libraries.css']
})
export class PrinterLibraryComponent implements OnInit {

  app_user_id: number;

  allPrinters: PrinterLibraryView[];
  displayPrinters: PrinterLibraryView[];
  printerSearchTxt: string;

  constructor(private auth: Auth 
              ,private router: Router,
              private printersService: PrintersService) { }

  applySearch() {
    if (this.printerSearchTxt) {
      this.displayPrinters = this.allPrinters.filter(printer => printer.Name.toLowerCase().includes(this.printerSearchTxt.toLowerCase()));
    }
    else {
      this.displayPrinters = this.allPrinters;
    }
  }

  ngOnInit() {
    if (!this.auth.authenticated()) {
      // send user back to home page if not signed in.
      this.router.navigateByUrl("");
    }
    if (localStorage.getItem("profile") != null ) {
      let userProfile: any = localStorage.getItem("profile");
      this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
    }

    this.printersService.getPrinters(this.app_user_id)
      .then(printers => this.allPrinters = printers)
      .then(printers => this.displayPrinters = printers);
  }

}
