import { Component, OnInit } from '@angular/core';
import { Auth } from '../../common/services/auth0/auth0.service';

import { environment } from '../../../environments/environment';

@Component({
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
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