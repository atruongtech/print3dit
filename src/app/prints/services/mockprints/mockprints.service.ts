import { Injectable } from '@angular/core';
import { PRINTS, FILAMENTS, PRINTERS } from './mockprints'

@Injectable()
export class PrintsService
{
    public getPrints(): Print[] {
        return PRINTS;
    }

    public getFilaments(): string[] {
        return FILAMENTS;
    }

    public getPrinters(): string[] {
        return PRINTERS;
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