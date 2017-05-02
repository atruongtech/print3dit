import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PrintersService, PrinterDetailView } from '../services/printers/printers.service';

@Component({
  selector: 'app-printer-details',
  templateUrl: './printer-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './printer-details.component.css']
})
export class PrinterDetailsComponent implements OnInit {

  printer: PrinterDetailView;

  constructor(private printersService: PrintersService
              ,private route: ActivatedRoute
              ,private router: Router ) { }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.printersService.getPrinterById(+params['id']))
    .subscribe((printer: PrinterDetailView) => this.printer = printer);
  }

}
