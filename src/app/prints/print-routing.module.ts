import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthguardService } from '../common/services/authguard/authguard.service';

import { PrintLibraryComponent } from './print-library/print-library.component';
import { PrintDetailsComponent } from './print-details/print-details.component';

export const printRoutes : Routes = [
  {
    path: 'prints', 
    component: PrintLibraryComponent,
    canActivate: [ AuthguardService ]
  },        
  {
    path: 'prints/printdetails/:id', 
    component: PrintDetailsComponent,
    canActivate: [ AuthguardService ] 
  },
  {
    path: 'prints/printdetails/:id/edit',
    redirectTo: "/prints"
  }    
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
