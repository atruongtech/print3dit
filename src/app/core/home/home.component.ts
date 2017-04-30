import { Component, OnInit } from '@angular/core';
import { Auth } from '../../common/services/auth0/auth0.service';

import { environment } from '../../../environments/environment';

@Component({
    template : "<div *ngIf='auth.authenticated() && auth.userProfile'>Welcome to Print3dStats, {{auth.userProfile.name}} </div> <div>{{environment.envName}}</div>"
})
export class HomeComponent implements OnInit {
    name: string;
    environment: any;

    constructor(public auth: Auth){
    }

    ngOnInit(){
        this.environment = environment;
    }

}