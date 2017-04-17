import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { PrintsModule } from './prints/prints.module';
import { PrintersModule } from './printers/printers.module';
import { RoutingModule} from './routing/routing.module';

import { Auth } from './common/services/auth0/auth0.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrandBarComponent } from './core/brand-bar/brand-bar.component';
import { AppCommonModule } from './common/app-common.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandBarComponent,
  ],
  imports: [
    AppCommonModule,
    PrintsModule,
    PrintersModule,
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
