import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthguardService } from '../common/services/authguard/authguard.service';

import { PrinterBaseComponent } from './printer-base/printer-base.component';
import { PrinterLibraryComponent } from './printer-library/printer-library.component';
import { PrinterDetailsComponent } from './printer-details/printer-details.component';

const printerRoutes: Routes = [
  {
    path: "printers",
    component: PrinterBaseComponent,
    canActivate: [ AuthguardService ],
    children: [
      {
        path: "",
        canActivateChild: [ AuthguardService ],
        children: [
          { path:"printerdetails/:id", component: PrinterDetailsComponent},
          { path:"", component: PrinterLibraryComponent }
        ]
      }
    ]
  }
  
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
