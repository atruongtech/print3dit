import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PrintLibraryComponent } from './print-library/print-library.component';
import { PrintDetailsComponent } from './print-details/print-details.component';


const printRoutes : Routes = [
  {path: 'prints/printdetails/:id', component: PrintDetailsComponent },
  {path: 'prints', component: PrintLibraryComponent}
    
]


@NgModule({
  imports: [
    RouterModule.forChild(printRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrintRoutingModule { }
