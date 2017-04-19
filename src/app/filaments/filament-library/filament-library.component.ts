import { Component, OnInit } from '@angular/core';

import { FilamentLibraryView, FilamentsService } from '../services/mockfilaments/mockfilaments.service';

@Component({
  selector: 'app-filament-library',
  templateUrl: './filament-library.component.html',
  styleUrls: ['../../common/css/libraries/libraries.css','./filament-library.component.css']
})
export class FilamentLibraryComponent implements OnInit {

  app_user_id: number;
  searchTxt: string;

  allFilaments: FilamentLibraryView[];
  displayFilaments: FilamentLibraryView[];

  constructor(private filamentsService: FilamentsService) { }

  ngOnInit() {
    if (localStorage.getItem("profile") != null ) {
      let userProfile: any = localStorage.getItem("profile");
      this.app_user_id = JSON.parse(userProfile).app_metadata.app_user_id;
    }
    else {
    
    }

    this.filamentsService.getFilaments(this.app_user_id)
      .then(filaments => this.allFilaments = filaments)
      .then(filaments => this.displayFilaments = this.allFilaments);
  }

  applySearch(): void {
    if (this.searchTxt)    {
      let searchTxtLwr = this.searchTxt.toLowerCase();
      this.displayFilaments = this.allFilaments.filter(
          filament => filament.Material.toLowerCase().includes(searchTxtLwr)
          || filament.Brand.toLowerCase().includes(searchTxtLwr)
          || filament.Color.toLowerCase().includes(searchTxtLwr));
    }
    else {
      this.displayFilaments = this.allFilaments;
    }
    

  }

}
