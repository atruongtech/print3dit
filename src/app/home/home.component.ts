import { Component, OnInit } from '@angular/core'
import { Auth } from '../common/services/auth0/auth0.service'

@Component({
    template : "<div *ngIf='auth.authenticated() && auth.userProfile'>Welcome to Print3dStats, {{auth.userProfile.name}} </div>"
})
export class HomeComponent implements OnInit {
    name: string;

    constructor(private auth: Auth){
    }

    ngOnInit(){

    }

}