import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrintsService, PrintDetailView, FilamentPrintsView, PrinterPrintsView } from '../services/mockprints/mockprints.service';


@Component({
  selector: 'app-print-library',
  templateUrl: './print-library.component.html',
  styleUrls: ['../../common/css/libraries/libraries.css'],
})
export class PrintLibraryComponent implements OnInit {
  app_user_id: number;

  allPrints: PrintDetailView[];
  displayPrints: PrintDetailView[];

  filamentOptions: FilamentPrintsView[];
  printerOptions: PrinterPrintsView[];

  printSearchTxt: string;
  selectedFilament: string;
  selectedPrinter: string;

  constructor(private printsService: PrintsService, private router: Router) { 
    
  }

  // apply filters if they are not null
  applySearch(): void {
    let filteredPrints = this.allPrints;
    if (this.printSearchTxt){
      filteredPrints = filteredPrints.filter(print => print.PrintName.toLowerCase().includes(this.printSearchTxt.toLowerCase())); 
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

    if (localStorage.getItem("profile") != null ) {
      let userProfile: any = localStorage.getItem("profile");
      this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
    }
    else {

    }
    

    this.printsService.getFilaments(this.app_user_id)
      .then(filaments => this.filamentOptions = filaments);
    this.printsService.getPrints(this.app_user_id)
      .then(prints => this.allPrints = prints)
      .then(prints => this.displayPrints = prints);
    this.printsService.getPrinters(this.app_user_id)
      .then(printers => this.printerOptions = printers);

    // initialize select boxes or else they are empty
    this.selectedFilament = "";
    this.selectedPrinter = "";
    this.printSearchTxt = null;
  }

}