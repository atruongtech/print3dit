import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from '../common/services/authguard/authguard.service';

import { FilamentsBaseComponent } from './filaments-base/filaments-base.component';
import { FilamentLibraryComponent } from './filament-library/filament-library.component';
import { FilamentDetailsComponent } from './filament-details/filament-details.component';

import { FilamentDetailsResolver } from './services/filament-details-resolver/filament-details-resolver.service';

export const filamentRoutes = [
  {
    path: "filaments",
    component: FilamentsBaseComponent,
    canActivate: [ AuthguardService],
    children: [
      {
        path: "",
        canActivateChild: [ AuthguardService ],
        children: [
          {
            path: "filamentdetails/:id/edit",
            redirectTo: "/filaments"
          },
          {
            path: "filamentdetails/:id",
            component: FilamentDetailsComponent,
            resolve: {
              filament: FilamentDetailsResolver
            }
          },
          {
            path: "",
            component: FilamentLibraryComponent
          }  
        ]
      }
       
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(filamentRoutes)
  ],
  exports : [
    RouterModule
  ],
  providers: [
    FilamentDetailsResolver
  ],
  declarations: []
})
export class FilamentRoutingModule { }
