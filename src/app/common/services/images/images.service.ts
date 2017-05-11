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
export class ImagesService {
  private presigned = '/images/imagerequest';

  constructor(private http: Http) { }

  public uploadImage(file: any) {
   return this.getPresignedPost()
        .map(
          presigned => {
            console.log('working with returned data');
            let headers = new Headers(); //{ 'Content-Type': file.type }
            for (let key in presigned.fields) {
              headers.append(key, presigned.fields[key]);
            }
            let options = new RequestOptions({ headers: headers });
            let fd = new FormData();
            fd.append('file[]', file, file.name);
            console.log(file);

            return this.http.put(presigned.url + presigned.fields['key'], file, options).timeout(6000)
              .catch(this.handleError);
          },
        )
        .catch(this.handleError);
  }

  public updateImagePath(printId: number, printerId:number, imageUrl: string) {
    let body = {
      PrintId: printId,
      PrinterId: printerId,
      ImageUrl: imageUrl
    }

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(environment.RES_URI + this.presigned, JSON.stringify(body), options)
            .map(res => { return this.extractData(res)} )
            .catch(this.handleError);
  }

  private getPresignedPost() {
    return this.http.get(environment.RES_URI + this.presigned)
              .timeout(6000)
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
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    console.error(errMsg);
    console.log("There was an error!");
    return Observable.throw(errMsg);
  }

}
