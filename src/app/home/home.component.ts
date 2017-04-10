import { Component } from '@angular/core'
import { Auth } from '../common/services/auth0/auth0.service'

@Component({
    template : "<div *ngIf='auth.authenticated()'>Welcome to Print3dStats, {{auth.userProfile.name}} </div>"
})
export class HomeComponent {
    name: string;

    constructor(private auth: Auth){
    }

}