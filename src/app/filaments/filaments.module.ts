import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppCommonModule } from '../common/app-common.module';
import { FilamentRoutingModule } from './filament-routing.module';

import { FilamentLibraryComponent } from './filament-library/filament-library.component';
import { FilamentDetailsComponent } from './filament-details/filament-details.component';
import { FilamentsBaseComponent } from './filaments-base/filaments-base.component';
import { FilamentsService } from './services/filaments/filaments.service';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    FilamentRoutingModule,
    FormsModule
  ],
  providers: [
    FilamentsService,
  ],
  declarations: [FilamentLibraryComponent, FilamentDetailsComponent, FilamentsBaseComponent]
})
export class FilamentsModule { }
