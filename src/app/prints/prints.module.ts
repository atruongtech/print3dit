import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrintRoutingModule } from './print-routing.module';

import { PrintLibraryComponent } from './print-library/print-library.component';
import { SideNavComponent } from '../common/side-nav/side-nav.component';
import { PrintDetailsComponent } from './print-details/print-details.component';
import { PrintsService } from './services/mockprints/mockprints.service';
@NgModule({
  imports: [
    CommonModule,
    PrintRoutingModule,
    FormsModule
  ],
  declarations: [
    PrintLibraryComponent,
    SideNavComponent,
    PrintDetailsComponent,
    ],
  providers: [
    PrintsService
  ]
})
export class PrintsModule { }
