import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PrinterLibraryComponent } from './printer-library/printer-library.component';
import { PrinterDetailsComponent } from './printer-details/printer-details.component';

const printerRoutes: Routes = [
  { path:"printers/printerdetails/:id", component: PrinterDetailsComponent},
  { path:"printers", component: PrinterLibraryComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(printerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrintersRoutingModule { }
