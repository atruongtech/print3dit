import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/of';

import { environment } from '../../../../environments/environment';

@Injectable()
export class PrintsService {
  private allPrints: string = "/prints";
  private printCreate: string = "/prints/create";
  private printById: string = "/prints/printdetails";

  private printerOptions: string = "/printers";
  private filamentOptions: string = "/filaments";

  private environment: any;

  constructor(private http: Http) {
    this.environment = environment;
  }

  public getPrints(userId: number): Observable<PrintDetailView[]> {
    return this.http.get(this.environment.RES_URI + this.allPrints + '/' + userId)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  public getPrintById(printId: number): Observable<PrintDetailView> {
    return this.http.get(this.environment.RES_URI + this.printById + '/' + printId)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  public getFilamentOptions(userId: number): Observable<FilamentPrintsView[]> {
     return this.http.get(this.environment.RES_URI + this.filamentOptions + '/' + userId)
              .timeout(60000)
              .map(res => {return this.extractFilamentData(res)})
              .catch(this.handleError);
  }

  public getPrinterOptions(userId: number): Observable<PrinterPrintsView[]> {
    return this.http.get(this.environment.RES_URI + this.printerOptions + '/' + userId)
              .timeout(60000)
              .map(res => {return this.extractPrinterData(res)})
              .catch(this.handleError);
  }

  public createPrint(print: PrintDetailView): Observable<PrintDetailView> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.environment.RES_URI + this.printCreate, JSON.stringify(print), options)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  public deletePrint(print: PrintDetailView): Observable<number> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('UserId', print.UserId.toString() );
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.environment.RES_URI + this.printById + '/' + print.PrintId)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  public updatePrint(print: PrintDetailView): Observable<PrintDetailView> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.environment.RES_URI + this.printById + "/" + print.PrintId, JSON.stringify(print), options)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private extractFilamentData(res: Response) {
    let body = res.json();
    let filaments = [];

    for (var key in body.data)
    {
      let filament = new FilamentPrintsView();

      let jsonItem = body.data[key];
      filament.FilamentId = jsonItem.FilamentId;
      filament.FilamentName = jsonItem.Brand + " " + jsonItem.Material + " (" + jsonItem.Color + ") - Spool " + jsonItem.UserFilamentId;
      filaments.push(filament);
    }
    
    return filaments; 
  }

  private extractPrinterData(res: Response) { 
    let body = res.json();
    let printers = [];

    for (var key in body.data)
    {
      let printer = new PrinterPrintsView();
      let jsonItem = body.data[key];
      printer.PrinterId = jsonItem.PrinterId;
      printer.PrinterName = jsonItem.PrinterName + " - Printer " + jsonItem.UserPrinterId;
      printers.push(printer);
    }
    return printers;
  }

  private handleError (error: Response | any) {
    if (error.status == 404) {
      return Observable.of(null);
    }

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    console.log("There was an error!");
    return Observable.throw(errMsg);
  }

}

export class PrintDetailView {
    PrintId: number;
    PrintName: string;
    SourceUrl: string;
    ModelPath: string;
    Success: boolean;
    PrintTimeHours: number;
    PrintTimeMinutes: number;
    MainPrintImageUrl: string;
    FilamentId: number;
    FilamentName: string;
    PrinterId: number;
    PrinterName: string;
    UserId: number;
    PrintDate: Date;
    ModelFileUrl: string;
    LengthUsed: number;
    PrintConfigId: number;
}

export class PrinterPrintsView {
    UserId: number;
    PrinterName: string;
    PrinterId: number;
    UserPrinterId: number;
}

export class FilamentPrintsView {
    UserId: number;
    FilamentName: string;
    FilamentId: number;
    UserFilamentId: number;
    LengthRemain: number;
}