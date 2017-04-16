import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { PrintsModule } from './prints/prints.module';

import { Auth } from './common/services/auth0/auth0.service'

import { AppComponent } from './app.component';
import { RoutingModule} from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { BrandBarComponent } from './core/brand-bar/brand-bar.component';
import { LoginComponent } from './common/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandBarComponent,
    LoginComponent,
  ],
  imports: [
    PrintsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    AlertModule.forRoot()
  ],
  providers: [Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
