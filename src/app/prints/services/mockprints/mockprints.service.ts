import { Injectable } from '@angular/core';
import { PRINTS } from './mockprints'

@Injectable()
export class PrintsService
{
    public getPrints(): Print[] {
        return PRINTS;
    }
}

export class Print {
    PrintId: number;
    Name: string;
    SourceUrl: string;
    ModelPath: string;
    Success: boolean;
    PrintTimeMinutes: number;
    MainPrintImageId: number;
    FilamentId: number;
    PrinterId: number;
    PrintConfigId: number;
    UserId: number;
}