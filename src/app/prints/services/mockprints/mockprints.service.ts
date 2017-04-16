import { Injectable } from '@angular/core';
import { PRINTS, FILAMENTSPRINTSLIBRARYVIEW, PRINTERSPRINTSLIBRARYVIEW } from './mockprints'

@Injectable()
export class PrintsService
{
    public getPrints(userId: number): Promise<PrintDetailView[]> {
        return Promise.resolve(PRINTS.filter(print => print.UserId == userId));
    }

    public getPrintById(printId: number): Promise<PrintDetailView> {
        return Promise.resolve(PRINTS.find(print => print.PrintId == printId));
    }

    public getFilaments(userId: number): Promise<FilamentForPrintsView[]> {
        return Promise.resolve(FILAMENTSPRINTSLIBRARYVIEW.filter(filament => filament.UserId == userId));
    }

    public getPrinters(userId: number): Promise<PrinterForPrintsView[]> {
        return Promise.resolve(PRINTERSPRINTSLIBRARYVIEW.filter(printer => printer.UserId == userId));
    }
}

export class PrintDetailView {
    PrintId: number;
    Name: string;
    SourceUrl: string;
    ModelPath: string;
    Success: boolean;
    PrintTimeHours: number;
    PrintTimeMinutes: number;
    MainPrintImageUrl: string;
    FilamentName: string;
    PrinterName: string;
    UserId: number;
    Date: Date;
    ModelFileUrl: string;
    LengthUsed: number;
    PrintConfigId: number;
}

export class PrinterForPrintsView {
    UserId: number;
    Name: string;
    PrinterId: number;
}

export class FilamentForPrintsView {
    UserId: number;
    Name: string;
    FilamentId: number;
}