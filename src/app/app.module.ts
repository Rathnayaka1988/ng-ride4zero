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
import { Cta1Component } from './cta1/cta1.component';
import { Cta2Component } from './cta2/cta2.component';
import { Cta3Component } from './cta3/cta3.component';
import { CtaComponent } from './cta/cta.component';
//import { ParallaxDirective } from './parallax.directive';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TopbarComponent,
    TitleComponent,
    DistancePanelComponent,
    Co2PanelComponent,
    BgImageComponent,
    CopyComponent,
    Cta1Component,
    Cta2Component,
    Cta3Component,
    CtaComponent,
    //ParallaxDirective
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
