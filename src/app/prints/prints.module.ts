import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrintRoutingModule } from './print-routing.module';

import { PrintLibraryComponent } from './print-library/print-library.component';
import { PrintDetailsComponent } from './print-details/print-details.component';
import { PrintsService } from './services/prints/prints.service';
import { AppCommonModule } from '../common/app-common.module';
import { PrintBaseComponent } from './print-base/print-base.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    PrintRoutingModule,
    FormsModule,
  ],
  declarations: [
    PrintLibraryComponent,
    PrintDetailsComponent,
    PrintBaseComponent,
    ],
  providers: [
    PrintsService
  ],
})
export class PrintsModule { }
