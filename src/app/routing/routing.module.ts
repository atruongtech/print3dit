import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent} from '../core//home/home.component';
import { LoginComponent } from '../common/login/login.component';
import { ErrorComponent } from '../core/error/error.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';

const appRoutes : Routes = [
    
    {path: 'login', component: LoginComponent },
    {path: 'error', component: ErrorComponent},
    {path: '404', component: NotFoundComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]

})
export class RoutingModule {}