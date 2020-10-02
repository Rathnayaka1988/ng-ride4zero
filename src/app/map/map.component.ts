import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps'
import {interval} from "rxjs/internal/observable/interval";
import { fireCircle } from '../circles';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap

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

  constructor() { }

  ngAfterViewInit(): void {
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
