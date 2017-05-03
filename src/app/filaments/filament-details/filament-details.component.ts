import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FilamentDetailView } from '../services/mockfilaments/mockfilaments.service';

@Component({
  selector: 'app-filament-details',
  templateUrl: './filament-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './filament-details.component.css']
})
export class FilamentDetailsComponent implements OnInit {

  filament: FilamentDetailView;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: {filament: FilamentDetailView}) => {
          if (data && data.filament) {
            this.filament = data.filament;
          }
        },
        error => {
          console.log("error reached final destination"); 
          console.log(error);
        });
      
  }

}
