import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { PrintsModule } from './prints/prints.module';
import { PrintersModule } from './printers/printers.module';
import { FilamentsModule } from './filaments/filaments.module';
import { RoutingModule} from './routing/routing.module';

import { Auth } from './common/services/auth0/auth0.service';
import { AuthguardService } from './common/services/authguard/authguard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrandBarComponent } from './core/brand-bar/brand-bar.component';
import { AppCommonModule } from './common/app-common.module';
import { ErrorComponent } from './core/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandBarComponent,
    ErrorComponent,
  ],
  imports: [
    AppCommonModule,
    PrintsModule,
    PrintersModule,
    FilamentsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RoutingModule,
    AlertModule.forRoot()
  ],
  providers: [Auth, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
