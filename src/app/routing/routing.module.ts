import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from '../home/home.component';
import { PrintLibraryComponent } from '../prints/print-library/print-library.component';

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'prints', component: PrintLibraryComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]

})
export class RoutingModule {}