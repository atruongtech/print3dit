import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { PrintsModule } from './prints/prints.module';
import { PrintersModule } from './printers/printers.module';
import { FilamentsModule } from './filaments/filaments.module';
import { RoutingModule} from './routing/routing.module';

import { Auth } from './common/services/auth0/auth0.service';
import { AuthguardService } from './common/services/authguard/authguard.service';
import { CustomHttpService } from './common/services/custom-http/custom-http.service';
import { ImagesService } from './common/services/images/images.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { BrandBarComponent } from './core/brand-bar/brand-bar.component';
import { AppCommonModule } from './common/app-common.module';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandBarComponent,
    ErrorComponent,
    NotFoundComponent,
  ],
  imports: [
    AppCommonModule,
    PrintsModule,
    PrintersModule,
    FilamentsModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    RoutingModule,
    AlertModule.forRoot()
  ],
  providers: [
    Auth, 
    AuthguardService,
    ImagesService,
    {
      provide: Http, 
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new CustomHttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions] 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
