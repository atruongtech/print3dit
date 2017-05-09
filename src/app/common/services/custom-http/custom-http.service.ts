import { Injectable } from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../../environments/environment';

@Injectable()
export class CustomHttpService extends Http {

  constructor(backend: XHRBackend, options: RequestOptions) { 
    let ApiKey = environment.ApiKey;
    let token = localStorage.getItem('auth_token'); // your custom token getter function here
    options.headers.set('ApiKey', `${ApiKey}`);
    super(backend, options);
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    let ApiKey = environment.ApiKey;
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = {headers: new Headers()};
      }
      options.headers.set('ApiKey', `${ApiKey}`);
    } else {
    // we have to add the token to the url object
      url.headers.set('ApiKey', `${ApiKey}`);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: CustomHttpService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        // if not authenticated
        console.log(res);
      }
      return Observable.throw(res);
    };
  }
}
