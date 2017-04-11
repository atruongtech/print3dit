import { Injectable } from '@angular/core';
import { PRINTS, FILAMENTS, PRINTERS } from './mockprints'

@Injectable()
export class PrintsService
{
    public getPrints(userId: number): Print[] {
        return PRINTS.filter(print => print.UserId == userId);
    }

    public getFilaments(userId: number): Filament[] {
        return FILAMENTS.filter(filament => filament.UserId == userId);
    }

    public getPrinters(userId: number): Printer[] {
        return PRINTERS.filter(printer => printer.UserId == userId);
    }
}

export class Print {
    PrintId: number;
    Name: string;
    SourceUrl: string;
    ModelPath: string;
    Success: boolean;
    PrintTimeMinutes: number;
    MainPrintImageUrl: string;
    FilamentName: string;
    PrinterName: string;
    UserId: number;
}

export class Printer {
    UserId: number;
    Name: string;
}

export class Filament {
    UserId: number;
    Name: string;
}