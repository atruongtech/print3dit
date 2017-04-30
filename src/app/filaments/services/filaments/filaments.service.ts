import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout'

import { environment } from '../../../../environments/environment'

@Injectable()
export class FilamentsService {
  environment: any;
  private allFilaments = '/filaments';
  private filamentById = '/filaments/filamentdetails';
  private filamentColors = '/filaments/colors';

  constructor(private http: Http) {
      this.environment = environment;
   }

  getFilaments(userId: number): Observable<FilamentDetailView[]> {
    // make the request
    return this.http.get(this.environment.RES_URI + this.allFilaments + '/' + userId)
              .timeout(3000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  } 

  getFilamentById(Id: number): Observable<FilamentDetailView> {
    return this.http.get(this.environment.RES_URI + this.filamentById + '/' + Id)
              .timeout(3000)
              .map(res => {return this.extractData(res)})
              .catch(this.handleError);
  }

  // getFilamentColors(): Promise<FilamentColor[]> {
  //   return Promise.resolve(FILAMENTCOLORS);
  // }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
    // console.log(JSON.parse(testJson).data);
    // return JSON.parse(testJson).data;
  }

  private handleError (error: Response | any) {
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

export class PrintFilamentView {
  PrintId: number;
  MainPrintImageUrl: string;
  Name: string;
}

const testJson = `{
  "data": [
    {
      "DateAcquired": "2016-02-01",
      "FilamentSource": "Monoprice",
      "HtmlColor": "#f47442",
      "Color": null,
      "LengthRemain": 50,
      "UserFilamentId": 1,
      "Material": "PLA",
      "UserId": 1,
      "Brand": "Monoprice",
      "FilamentId": 1
    },
    {
      "DateAcquired": "2016-02-01",
      "FilamentSource": "Microcenter",
      "HtmlColor": "#000000",
      "Color": null,
      "LengthRemain": 50,
      "UserFilamentId": 2,
      "Material": "PETG",
      "UserId": 1,
      "Brand": "Inland",
      "FilamentId": 2
    }
  ]
}`
