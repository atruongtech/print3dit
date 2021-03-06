import { Injectable } from '@angular/core';
import { PRINTERLIBRARY, PRINTERDETAILS } from './mockprinters'

@Injectable()
export class PrintersService {

  constructor() { }

  getPrinters(userId: number): Promise<PrinterLibraryView[]> {
    return Promise.resolve(PRINTERLIBRARY.filter(printer => printer.UserId == userId));
  }

  getPrinterById(printerId: number): Promise<PrinterDetailView> {
    return Promise.resolve(PRINTERDETAILS.find(printer => printer.PrinterId == printerId));
  }

}

export class PrinterDetailView {
  PrinterId: number;
  UserId: number;
  PrinterName: string;
  DateAcquired: Date;
  NumberOfPrints: number;
  PrintTimeHours: number;
  PrinterSource: string;  
  BeltMaintInt: number;
  BeltMaintLast: number;
  LubeMaintInt: number;
  LubeMaintLast: number;
  WireMaintInt: number;
  WireMaintLast: number;
  MainPrinterImageUrl: string;
  UserPrinterId: number;
  Prints: PrintPrinterView[];
}

export class PrinterLibraryView {
  PrinterId: number;
  UserId: number;
  PrinterName: string;
  DateAcquired: Date;
  NumberOfPrints: number;
  PrintTimeHours: number;
  MainPrinterImageUrl: string;
  UserPrinterId: number;
}

export class PrintPrinterView {
  PrintId: number;
  PrintName: string;
  MainPrintImageUrl: string;
}