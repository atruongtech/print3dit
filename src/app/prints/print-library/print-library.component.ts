import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrintsService, Print, Filament, Printer } from '../services/mockprints/mockprints.service';
import { Auth } from '../../common/services/auth0/auth0.service';


@Component({
  selector: 'app-print-library',
  templateUrl: './print-library.component.html',
  styleUrls: ['./print-library.component.css'],
  providers: [PrintsService]
})
export class PrintLibraryComponent implements OnInit {
  app_user_id: number;

  allPrints: Print[];
  displayPrints: Print[];

  filamentOptions: Filament[];
  printerOptions: Printer[];

  printSearchTxt: string;
  selectedFilament: string;
  selectedPrinter: string;

  constructor(private printsService: PrintsService, private auth: Auth, private router: Router) { 
    
  }

  // apply filters if they are not null
  applySearch(): void {
    let filteredPrints = this.allPrints;
    if (this.printSearchTxt){
      filteredPrints = filteredPrints.filter(print => print.Name.toLowerCase().includes(this.printSearchTxt.toLowerCase())); 
    }
    if (this.selectedFilament) {
      filteredPrints = filteredPrints.filter(print => print.FilamentName == this.selectedFilament);
    }
    if (this.selectedPrinter) {
      filteredPrints = filteredPrints.filter(print => print.PrinterName == this.selectedPrinter);
    }
    
    this.displayPrints = filteredPrints;
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
    

    this.filamentOptions = this.printsService.getFilaments(this.app_user_id);
    this.allPrints = this.printsService.getPrints(this.app_user_id);
    this.printerOptions = this.printsService.getPrinters(this.app_user_id);
    this.displayPrints = this.allPrints;

    // initialize select boxes or else they are empty
    this.selectedFilament = "";
    this.selectedPrinter = "";
    this.printSearchTxt = null;
  }

}
