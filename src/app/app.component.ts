import { Component } from '@angular/core';
import { Auth } from './common/services/auth0/auth0.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, world!';

  constructor(private auth: Auth) {}
}
