import { Injectable } from '@angular/core';
import { FILAMENTLIBRARY, FILAMENTDETAILS, FILAMENTCOLORS, FILAMENTMATERIALS } from './mockfilaments';

@Injectable()
export class FilamentsService {

  constructor() { }

  getFilaments(userId: number): Promise<FilamentLibraryView[]> {
    return Promise.resolve(FILAMENTLIBRARY.filter(filament => filament.UserId == userId));
  } 

  getFilamentById(Id: number): Promise<FilamentDetailView> {
    return Promise.resolve(FILAMENTDETAILS.find(filament => filament.FilamentId == Id));
  }

  getFilamentColors(): Promise<FilamentColor[]> {
    return Promise.resolve(FILAMENTCOLORS);
  }

  getFilamentMaterials(): Promise<FilamentMaterial[]> {
    return Promise.resolve(FILAMENTMATERIALS);
  }

}

export class FilamentLibraryView {
  FilamentId: number;
  UserId: number;
  UserFilamentId: number;
  Material: string;
  Brand: string;
  Color: string;
  HtmlColor: string;
}

export class FilamentDetailView {
  FilamentId: number;
  UserId: number;
  UserFilamentId: number;
  Material: string;
  Brand: string;
  Color: string;
  Prints: PrintFilamentView[];
  LengthRemain: number;
  DateAcquired: Date;
  FilamentSource: string;
  HtmlColor: string;
}

export class FilamentColor {
  Color: string;
  ColorId: number;
}

export class FilamentMaterial {
  Material: string;
  MaterialId: number;
}

export class PrintFilamentView {
  PrintId: number;
  MainPrintImageUrl: string;
  Name: string;
}
