import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { PrintersRoutingModule } from './printers-routing.module'
import { PrinterLibraryComponent } from './printer-library/printer-library.component';
import { PrintersService } from './services/printers/printers.service';
import { AppCommonModule } from '../common/app-common.module';
import { PrinterDetailsComponent } from './printer-details/printer-details.component';
import { PrinterBaseComponent } from './printer-base/printer-base.component';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    PrintersRoutingModule,
    FormsModule
  ],
  declarations: [PrinterLibraryComponent, PrinterDetailsComponent, PrinterBaseComponent],
  providers: [PrintersService]
})
export class PrintersModule { }
