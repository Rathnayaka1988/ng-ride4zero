import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TitleComponent } from './title/title.component';
import { DistancePanelComponent } from './distance-panel/distance-panel.component';
import { Co2PanelComponent } from './co2-panel/co2-panel.component';
import { BgImageComponent } from './bg-image/bg-image.component';
import { CopyComponent } from './copy/copy.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TopbarComponent,
    TitleComponent,
    DistancePanelComponent,
    Co2PanelComponent,
    BgImageComponent,
    CopyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
