import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';


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
          return filament;
        }
        else {
          this.router.navigate(['/filaments']);
          return null;
        }
      }).first()
  }
}
