import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FilamentsService, FilamentDetailView, FilamentColor } from '../services/filaments/filaments.service';

@Component({
  selector: 'app-filament-details',
  templateUrl: './filament-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './filament-details.component.css']
})
export class FilamentDetailsComponent implements OnInit {
  app_user_id: number;

  filament: FilamentDetailView;
  colors: FilamentColor[];
  selectedColor: FilamentColor;

  initialHtmlColor: string;

  editMode: Boolean = false;
  createMode: Boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private filamentsService: FilamentsService) { }

  public formSubmission() {
    if (this.createMode) {
      this.createFilament();
    }
    else {
      this.saveFilamentEdit();
    }
  }

  public saveFilamentEdit() {
    // set filament color id appropriately before save
    this.filament.ColorId = this.selectedColor.ColorId;

    this.filamentsService.updateFilament(this.filament)
        .subscribe(
          response => this.router.navigate(['/filaments','filamentdetails', response.FilamentId]),
          error => this.router.navigate(['/error'])
          );
  }

  public createFilament() {
    this.filament.UserId = this.app_user_id;
    this.filament.ColorId = this.selectedColor.ColorId;
    this.filamentsService.createFilament(this.filament)
        .subscribe(
          filament => {
            this.router.navigate(['/filaments', 'filamentdetails', filament.FilamentId]);
          },
          error => {
            console.error(error);
            this.router.navigate(['/error']);
          }
        )
  }

  private getColorOptions() {
    this.filamentsService.getFilamentColors()
        .subscribe(
          colors => {
            this.colors = colors;
            this.selectedColor = colors.find(color => color.ColorId == this.filament.ColorId);
          },
          error => this.router.navigate(['/error'])
        )
  }

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
            this.getColorOptions();

            this.initialHtmlColor = this.filament.HtmlColor;
          }
          else if (segments.join("").includes("create")) {
            this.createMode = true;
            this.editMode = true;

            this.filament = new FilamentDetailView();
            this.filament.HtmlColor = "#000000";
            this.getColorOptions();
          }          
        },
        error => this.router.navigate(['/error']));
  }

}
