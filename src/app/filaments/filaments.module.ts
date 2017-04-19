import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilamentLibraryComponent } from './filament-library/filament-library.component';
import { FilamentDetailsComponent } from './filament-details/filament-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilamentLibraryComponent, FilamentDetailsComponent]
})
export class FilamentsModule { }
