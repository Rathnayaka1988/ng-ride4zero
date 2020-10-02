import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@angular/google-maps'
import { fireCircle } from '../circles';

import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Journey } from '../models';

import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild('target') target: ElementRef;

  zoom = 3.8

  center: google.maps.LatLngLiteral = { 
    lat: 40, 
    lng: -40,
  };

  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    draggable: false,
    disableDefaultUI: true,
  }

  // markerCenter = { lng: -40,  lat: 30 };

  // delims = [
  //   { lng: -50,  lat: -50 },
  //   { lng: -50, lat: 30 },
  //   { lng: 30, lat: 30 },
  //   { lng: 30, lat: -50 },
  // ];



  // scale = 1;

  journeyQueue: Journey[] = new Array<Journey>();
  journeyIndex: number = 0;

  constructor(private data: DataService) { }

  ngAfterViewInit(): void {

    interval(6000)
      .pipe(
        startWith(0),
        switchMap(() => this.data.getJourneys())
      )
      .subscribe((journeys: Journey[]) => {
        console.log("MapComponent got journeys", journeys);
        console.log("index", this.journeyIndex, "journeys legnth", journeys.length)
        for (let i = this.journeyIndex; i < journeys.length; i++) {
          console.log("Pushing to queue", journeys[i])
          this.journeyQueue.push(journeys[i]);
        }

        this.journeyIndex = journeys.length;
        
      });

      interval(1000)
      .subscribe(() => {
        console.log("Queue size", this.journeyQueue.length);
        const j = this.journeyQueue.shift();
        console.log("Queue size after shift", this.journeyQueue.length);
        
        if (j) {
          fireCircle(this.target.nativeElement, 0, 0, j.distance_m);
        }
        
      });





    // let poly = new google.maps.Polygon({
    //   paths: this.delims,
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 3,
    //   fillColor: '#FF0000',
    //   fillOpacity: 0.5
    // });

    // poly.setMap(this.map.googleMap);


    // interval(3000)
    //   .subscribe(() => {
    //     console.log("tick");

    //     const copied = Object.assign([], this.delims);
    //     for (let i = 0; i < this.delims.length; i++) {
    //       const lng = this.markerCenter.lng + this.delims[i].lng * this.scale;
    //       const lat = this.markerCenter.lat + this.delims[i].lat * this.scale;
    //       copied[i].lng = lng;
    //       copied[i].lat = lat;
    //       console.log(this.scale, lat, lng);
    //     }
    //     this.scale *= 1.01;

    //     //poly.setMap(null);

    //     // poly = new google.maps.Polygon({
    //     //   paths: copied,
    //     //   strokeColor: '#FF0000',
    //     //   strokeOpacity: 0.8,
    //     //   strokeWeight: 3,
    //     //   fillColor: '#FF0000',
    //     //   fillOpacity: 0.5
    //     // });

    //     poly.setPaths(copied);
    //     poly.setOptions

    //     //poly.setMap(this.map.googleMap);
    //   });
  }

  onClick(event) {
    console.log("onClick", event.clientX, event.clientY);
    fireCircle(event.target, event.clientX, event.clientY, 20);
  }

}
