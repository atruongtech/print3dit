import { Component, OnInit, Input } from '@angular/core';
import { Auth } from '../services/auth0/auth0.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(public auth: Auth) { }
  ngOnInit() {
  }

}
