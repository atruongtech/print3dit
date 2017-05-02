import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

import { PrintsService, PrintDetailView } from '../prints/prints.service';

@Injectable()
export class PrintDetailsResolver implements Resolve<PrintDetailView> {

  constructor(private printsService: PrintsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PrintDetailView> {
    let id = route.params['id'];

    return this.printsService.getPrintById(id)
      .map(print => {
        if (print) {
          return print;
        }
        else {
          this.router.navigate(['/404']);
          return null;
        }
      })
      .catch(error => {
          // service has already logged error in console.
          this.router.navigate(['/error']); 
          return Observable.throw(error)
        })
      .first()
  }
}
