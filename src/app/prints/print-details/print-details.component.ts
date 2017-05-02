import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { PrintsService, PrintDetailView } from '../services/prints/prints.service';

@Component({
  selector: 'app-print-details',
  templateUrl: './print-details.component.html',
  styleUrls: ['../../common/css/details/details.css']
})
export class PrintDetailsComponent implements OnInit {

  print: PrintDetailView;

  constructor(private route: ActivatedRoute
              ,private router: Router
              ,private printsService: PrintsService) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: {print: PrintDetailView}) => {
          this.print = data.print;
        },
      error => {console.log("error reached final destination"); console.log(error); this.router.navigate(['/error']);});

    
  }

}
