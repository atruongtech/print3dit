import { Injectable } from '@angular/core';
import { PRINTS, FILAMENTS, PRINTERS } from './mockprints'

@Injectable()
export class PrintsService
{
    public getPrints(userId: number): Promise<Print[]> {
        return Promise.resolve(PRINTS.filter(print => print.UserId == userId));
    }

    public getFilaments(userId: number): Promise<Filament[]> {
        return Promise.resolve(FILAMENTS.filter(filament => filament.UserId == userId));
    }

    public getPrinters(userId: number): Promise<Printer[]> {
        return Promise.resolve(PRINTERS.filter(printer => printer.UserId == userId));
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