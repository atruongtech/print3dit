import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PrintersService, PrinterDetailView } from '../services/printers/printers.service';

@Component({
  selector: 'app-printer-details',
  templateUrl: './printer-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './printer-details.component.css']
})
export class PrinterDetailsComponent implements OnInit {
  private editMode: boolean = false;
  printer: PrinterDetailView;

  constructor(private printersService: PrintersService
              ,private route: ActivatedRoute
              ,private router: Router ) { }

  public savePrinterEdit() {
    console.log("button clicked");
    this.printersService.updatePrinter(this.printer).
      subscribe(response => this.router.navigate(['/printers','printerdetails', response.PrinterId]));
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: {printer: PrinterDetailView}) => {
          this.printer = data.printer;
        },
      error => {
        console.log("error reached final destination"); 
        console.log(error); 
        this.router.navigate(['/error']);
      });

    this.route.url
      .subscribe(segments => {if (segments.join("").includes("edit")) { this.editMode = true }})


  }

}
