import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FilamentsBaseComponent } from './filaments-base/filaments-base.component';
import { FilamentLibraryComponent } from './filament-library/filament-library.component';
import { FilamentDetailsComponent } from './filament-details/filament-details.component';

export const filamentRoutes = [
  {
    path: "filaments",
    component: FilamentsBaseComponent,
    children: [
      {
        path: "filamentdetails/:id/edit",
        redirectTo: "/filaments"
      },
      {
        path: "filamentdetails/:id",
        component: FilamentDetailsComponent
      },
      {
        path: "",
        component: FilamentLibraryComponent
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
  declarations: []
})
export class FilamentRoutingModule { }
