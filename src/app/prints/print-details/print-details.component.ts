import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { PrintsService, PrintDetailView } from '../services/mockprints/mockprints.service';

@Component({
  templateUrl: './print-details.component.html',
  styleUrls: ['../../common/css/details/details.css']
})
export class PrintDetailsComponent implements OnInit {

  print: PrintDetailView;

  constructor(private route: ActivatedRoute
              ,private router: Router
              ,private printsService: PrintsService) { }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.printsService.getPrintById(+params['id']))
    .subscribe((print: PrintDetailView) => this.print = print);

    
  }

}
