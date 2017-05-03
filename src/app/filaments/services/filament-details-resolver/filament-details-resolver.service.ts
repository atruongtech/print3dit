import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/of';


import { FilamentsService, FilamentDetailView } from '../filaments/filaments.service';

@Injectable()
export class FilamentDetailsResolver implements Resolve<FilamentDetailView>{

  constructor(private filamentsService: FilamentsService
              , private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FilamentDetailView> {
    let id = route.params['id'];

    return this.filamentsService.getFilamentById(id)
      .map(filament => {
        if (filament) {
          console.log("found something to return");
          return filament;
        }
        else {
          console.log("should redirect to 404");
          this.router.navigate(['/404']);
          return new Observable(null);
        }
      })
      .catch(error => {
          this.router.navigate(['/error']); 
          return Observable.throw(error)
        }).first()
  }
}
