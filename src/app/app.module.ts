import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";
import {TunesModule} from "./tunes/tunes.module";
import { TheNavigationComponent } from './the-navigation/the-navigation.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TheNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    HomeModule,
    TunesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
