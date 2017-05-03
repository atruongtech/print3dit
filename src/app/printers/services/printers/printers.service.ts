import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/of';

import { environment } from '../../../../environments/environment'

@Injectable()
export class PrintersService {
  private allPrinters = '/printers';
  private printerById = '/printers/printerdetails';

  private environment: any;

  constructor(private http: Http) {
    this.environment = environment;
  }

  public getPrinters(userId: number): Observable<PrinterDetailView[]> {
    return this.http.get(this.environment.RES_URI + this.allPrinters + '/' + userId)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  public getPrinterById(printerId: number): Observable<PrinterDetailView> {
    return this.http.get(this.environment.RES_URI + this.printerById + '/' + printerId)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  public updatePrinter(printer: PrinterDetailView): Observable<PrinterDetailView> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.environment.RES_URI + this.printerById + '/' + printer.PrinterId, JSON.stringify(printer), options)
              .timeout(60000)
              .map(res => this.extractData(res))
              .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
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