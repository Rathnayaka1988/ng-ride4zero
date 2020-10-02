import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  zoom = 3.8
  center: google.maps.LatLngLiteral = { 
    lat: 40, 
    lng: -40,
  };
  options: google.maps.MapOptions = {
    //mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    draggable: false,
    disableDefaultUI: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
