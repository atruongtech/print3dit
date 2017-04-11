import { Component, OnInit } from '@angular/core';
import { PrintsService, Print } from '../services/mockprints/mockprints.service';

@Component({
  selector: 'app-print-library',
  templateUrl: './print-library.component.html',
  styleUrls: ['./print-library.component.css'],
  providers: [PrintsService]
})
export class PrintLibraryComponent implements OnInit {

  allPrints: Print[];
  displayPrints: Print[];

  filamentOptions: string[];
  printerOptions: string[];

  printSearchTxt: string;
  selectedFilament: string;
  selectedPrinter: string;
  constructor(private printsService: PrintsService) { 
    this.printSearchTxt = null;
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
    this.filamentOptions = this.printsService.getFilaments();
    this.allPrints = this.printsService.getPrints();
    this.printerOptions = this.printsService.getPrinters();
    this.displayPrints = this.allPrints;

    // initialize select boxes or else they are empty
    this.selectedFilament = null;
    this.selectedPrinter = null;
  }

}
