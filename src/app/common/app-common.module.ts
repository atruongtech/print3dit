import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MinIntValidator } from './directives/min-int-validator/min-int-validator.directive';

import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
      SideNavComponent,
      LoginComponent,
      MinIntValidator
    ],
  providers: [
  ],
  exports: [
      SideNavComponent,
      LoginComponent,
      MinIntValidator
  ]
})
export class AppCommonModule { }
