import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { marker } from './marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<marker[]>(baseUrl + 'station' + "/markers").subscribe(result => {
      this.markers = result;
      if(result?.length > 0)
      {
        this.lat = result[0].lat;
        this.lng = result[0].lng;
      }
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }
  clickedMarker(label: string, index: number) {
    this.CurrentLabel = label;
    console.log(`clicked the marker: ${label || index}`)
  }
  zoom: number = 8;
  title = 'Stations map';
  CurrentLabel = '';
  lat = 51.678418;
  lng = 7.809007;

  markers: marker[];
}
