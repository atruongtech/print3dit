import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintLibraryComponent } from './print-library/print-library.component';
import { SideNavComponent } from '../common/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    PrintLibraryComponent,
    SideNavComponent
    ]
})
export class PrintsModule { }
