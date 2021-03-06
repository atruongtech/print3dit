import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrintersService, PrinterLibraryView } from '../services/printers/printers.service';

@Component({
  selector: 'app-printer-library',
  templateUrl: './printer-library.component.html',
  styleUrls: ['../../common/css/libraries/libraries.css']
})
export class PrinterLibraryComponent implements OnInit {

  app_user_id: number;

  allPrinters: PrinterLibraryView[];
  displayPrinters: PrinterLibraryView[];
  printerSearchTxt: string;

  loading: Boolean = true;

  constructor(private router: Router,
              private printersService: PrintersService) { }

  applySearch() {
    if (this.printerSearchTxt) {
      this.displayPrinters = this.allPrinters.filter(printer => printer.PrinterName.toLowerCase().includes(this.printerSearchTxt.toLowerCase()));
    }
    else {
      this.displayPrinters = this.allPrinters;
    }
  }

  ngOnInit() {
    if (localStorage.getItem("profile") != null ) {
      let userProfile: any = localStorage.getItem("profile");
      this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
    }

    this.printersService.getPrinters(this.app_user_id)
      .subscribe(
        printers => {
          this.allPrinters = printers;
          this.displayPrinters = printers;
          this.loading = false;
        },
        error => {
          console.error(error);
          this.router.navigate(['/error']);
        }
      );
  }

}
