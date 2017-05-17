import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrintsService, PrintDetailView, FilamentPrintsView, PrinterPrintsView } from '../services/prints/prints.service';


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
  selectedFilament: any;
  selectedPrinter: any;

  loading: Boolean = true;

  constructor(private printsService: PrintsService, private router: Router) { 
    
  }

  // apply filters if they are not null
  applySearch(): void {
    let filteredPrints = this.allPrints;
    if (this.printSearchTxt){
      filteredPrints = filteredPrints.filter(print => print.PrintName.toLowerCase().includes(this.printSearchTxt.toLowerCase())); 
    }
    if (this.selectedFilament) {
      filteredPrints = filteredPrints.filter(print => print.FilamentId == this.selectedFilament.FilamentId);
    }
    if (this.selectedPrinter) {
      filteredPrints = filteredPrints.filter(print => print.PrinterId == this.selectedPrinter.PrinterId);
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

    this.printsService.getFilamentOptions(this.app_user_id)
      .subscribe(
        filaments => { 
          this.filamentOptions = filaments
        }
        ,error => {
          console.error(error);
          this.router.navigate(['/error']);
        });
    this.printsService.getPrints(this.app_user_id)
      .subscribe(
        prints => {
          this.allPrints = prints; 
          this.displayPrints = prints;
          this.loading = false;
        },
        error => {
          console.error(error);
          this.router.navigate(['/error']);
        })
    this.printsService.getPrinterOptions(this.app_user_id)
      .subscribe(
        printers => this.printerOptions = printers,
        error => {
          console.error(error);
          this.router.navigate(['/error']);
        });

    // initialize select boxes or else they are empty
    this.selectedFilament = "";
    this.selectedPrinter = "";
    this.printSearchTxt = null;
  }

}
