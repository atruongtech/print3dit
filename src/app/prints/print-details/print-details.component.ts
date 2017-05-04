import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { PrintsService, PrintDetailView, PrinterPrintsView, FilamentPrintsView } from '../services/prints/prints.service';

@Component({
  selector: 'app-print-details',
  templateUrl: './print-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './print-details.component.css']
})
export class PrintDetailsComponent implements OnInit {
  app_user_id: number;

  print: PrintDetailView;
  printTimeMinutes: number;
  printTimeHours: number;

  printerOptions: PrinterPrintsView[];
  selectedPrinter: PrinterPrintsView;

  filamentOptions: FilamentPrintsView[];
  selectedFilament: FilamentPrintsView;

  editMode: Boolean = false;

  constructor(private route: ActivatedRoute
              ,private router: Router
              ,private printsService: PrintsService) { }

  public savePrintUpdate() {
    // update items not bound directly to the UI
    this.print.FilamentId = this.selectedFilament.FilamentId;
    this.print.PrinterId = this.selectedPrinter.PrinterId;
    this.print.PrintTimeMinutes = (this.printTimeHours * 60) + this.printTimeMinutes;

    this.printsService.updatePrint(this.print)
        .subscribe(
          print => this.router.navigate(['/prints','printdetails',print.PrintId]),
          error => this.router.navigate(['/error'])
        )

    
  }

  // Interface implementations
  ngOnInit() {
    if (localStorage.getItem("profile") != null ) {
      let userProfile: any = localStorage.getItem("profile");
      this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
    }
    else {
      console.error("Application user ID not set.");
      this.router.navigate(['/error']);
    }

    this.route.data
      .subscribe(
        (data: {print: PrintDetailView}) => {
          this.print = data.print;
          this.printTimeMinutes = this.print.PrintTimeMinutes % 60;
          this.printTimeHours = Math.floor(this.print.PrintTimeMinutes / 60)
        },
      error => {console.log("error reached final destination"); console.log(error); this.router.navigate(['/error']);});

    this.route.url
      .subscribe(
        segments => {
          if (segments.join("").includes("edit")) { 
            this.editMode = true;

            this.printsService.getFilamentOptions(this.app_user_id)
                .subscribe(
                  filaments => {
                    this.filamentOptions = filaments;
                    this.selectedFilament = filaments.find(filament => filament.FilamentId == this.print.FilamentId)
                  },
                  error => this.router.navigate(['/error'])
                );
            this.printsService.getPrinterOptions(this.app_user_id)
                .subscribe(
                  printers => {
                    this.printerOptions = printers;
                    this.selectedPrinter = printers.find(printer => printer.PrinterId == this.print.PrinterId)
                  },
                  error => this.router.navigate(['/error'])
                )
          }
        })
  }

}
