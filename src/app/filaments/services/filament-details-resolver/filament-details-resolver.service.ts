import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { FilamentsService, FilamentDetailView } from '../mockfilaments/mockfilaments.service';

@Injectable()
export class FilamentDetailsResolver implements Resolve<FilamentDetailView>{

  constructor(private filamentsService: FilamentsService
              , private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<FilamentDetailView> {
    let id = route.params['id'];

    return this.filamentsService.getFilamentById(id)
      .then(filament => {
        if (filament) {
          return filament;
        }
        else {
          this.router.navigate(['/filaments']);
          return null;
        }
      })
  }
}
