import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FilamentsService, FilamentDetailView, FilamentColor } from '../services/filaments/filaments.service';

@Component({
  selector: 'app-filament-details',
  templateUrl: './filament-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './filament-details.component.css']
})
export class FilamentDetailsComponent implements OnInit {

  filament: FilamentDetailView;
  colors: FilamentColor[];
  selectedColor: FilamentColor;
  editMode: Boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private filamentsService: FilamentsService) { }

  public saveFilamentEdit() {
    // set filament color id appropriately before save
    this.filament.ColorId = this.selectedColor.ColorId;

    this.filamentsService.updateFilament(this.filament)
        .subscribe(
          response => this.router.navigate(['/filaments','filamentdetails', response.FilamentId]),
          error => this.router.navigate(['/error'])
          );
  }

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
          this.router.navigate(['/error']);
        });

    this.route.url
      .subscribe(
        segments => {
          if (segments.join("").includes("edit")) { 
            this.editMode = true 
            this.filamentsService.getFilamentColors()
              .subscribe(
                colors => {
                  this.colors = colors;
                  this.selectedColor = colors.find(color => color.ColorId == this.filament.ColorId);
                },
                error => this.router.navigate(['/error'])
              )
          }          
        },
        error => this.router.navigate(['/error']));
  }

}
