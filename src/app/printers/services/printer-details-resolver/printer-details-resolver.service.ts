import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

import { PrintersService, PrinterDetailView } from '../printers/printers.service';

@Injectable()
export class PrinterDetailsResolver implements Resolve<PrinterDetailView>{

  constructor(private printersService: PrintersService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PrinterDetailView> {
    let id = route.params['id'];

    return this.printersService.getPrinterById(id)
      .map(printer => {
        if (printer) {
          return printer;
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
