import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintLibraryComponent } from './print-library/print-library.component';
import { SideNavComponent } from '../common/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrintDetailsComponent } from './print-details/print-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    PrintLibraryComponent,
    SideNavComponent,
    PrintDetailsComponent,
    ]
})
export class PrintsModule { }
