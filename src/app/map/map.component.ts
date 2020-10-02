import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps'

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

  delims = [
    { lng: -30,  lat: 30 },
    { lng: -30, lat: 50 },
    { lng: -50, lat: 50 },
    { lng: -50, lat: 30 },
  ];

  poly = new google.maps.Polygon({
    paths: this.delims,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.5
  });

  constructor() { }

  ngAfterViewInit(): void {
    this.poly.setMap(this.map.googleMap);
  }

}
