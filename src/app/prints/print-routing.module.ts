import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthguardService } from '../common/services/authguard/authguard.service';

import { PrintBaseComponent } from './print-base/print-base.component';
import { PrintLibraryComponent } from './print-library/print-library.component';
import { PrintDetailsComponent } from './print-details/print-details.component';

export const printRoutes : Routes = [
  {
    path: 'prints', 
    component: PrintBaseComponent,
    canActivate: [ AuthguardService ],
    children: [
      {
        path: "",
        canActivateChild: [ AuthguardService ],
        children: [
          {
            path: 'printdetails/:id', 
            component: PrintDetailsComponent,
          },
          {
            path: 'printdetails/:id/edit',
            redirectTo: "/prints"
          } ,
          {
            path: "",
            component: PrintLibraryComponent
          }
        ]
      }
    ]
  },        
    
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
