import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
      SideNavComponent,
      LoginComponent
    ],
  providers: [
  ],
  exports: [
      SideNavComponent,
      LoginComponent
  ]
})
export class AppCommonModule { }
