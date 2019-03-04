import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';


// localstorage
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';
import { MyLocalStorageService } from './services/local-storage/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocalStorageModule.forRoot({
      prefix: 'app-root',
      storageType: 'localStorage'
    })
  ],
  providers: [
    MyLocalStorageService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
