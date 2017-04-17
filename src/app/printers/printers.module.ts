import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { PrintersRoutingModule } from './printers-routing.module'
import { PrinterLibraryComponent } from './printer-library/printer-library.component';
import { PrintersService } from './services/mockprinters/mockprinters.service';
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    PrintersRoutingModule,
    FormsModule
  ],
  declarations: [PrinterLibraryComponent],
  providers: [PrintersService]
})
export class PrintersModule { }
