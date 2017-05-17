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
export class FilamentsService {
  environment: any;
  private allFilaments = '/filaments';
  private filamentById = '/filaments/filamentdetails';
  private filamentCreate = '/filaments/create';
  private filamentColors = '/filaments/colors';

  constructor(private http: Http) {
      this.environment = environment;
   }

  public getFilaments(userId: number): Observable<FilamentDetailView[]> {
    // make the request
    return this.http.get(this.environment.RES_URI + this.allFilaments + '/' + userId)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  } 

  public getFilamentById(Id: number): Observable<FilamentDetailView> {
    return this.http.get(this.environment.RES_URI + this.filamentById + '/' + Id)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }


  public getFilamentColors(): Observable<FilamentColor[]> {
    return this.http.get(this.environment.RES_URI + this.filamentColors)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  public updateFilament(filament: FilamentDetailView) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.environment.RES_URI + this.filamentById + "/" + filament.FilamentId, JSON.stringify(filament), options)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  public createFilament(filament: FilamentDetailView) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.environment.RES_URI + this.filamentCreate, JSON.stringify(filament), options)
              .timeout(60000)
              .map(res => {return this.extractData(res)})
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
      errMsg = `${error.status} - ${error.statusText || ''} `;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    console.log("There was an error!");
    return Observable.throw(errMsg);
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
  ColorId: number;
  Prints: PrintFilamentView[];
  LengthRemain: number;
  DateAcquired: Date;
  FilamentSource: string;
  HtmlColor: string;
}

export class PrintFilamentView {
  PrintId: number;
  MainPrintImageUrl: string;
  PrintName: string;
}

export class FilamentColor {
  ColorId: number;
  Color: string;
}
