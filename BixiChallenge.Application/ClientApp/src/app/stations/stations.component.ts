import { HttpClient } from '@angular/common/http';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  public stations: Station[];
  OrderedBy = 'code';
  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
    http.get<Station[]>(baseUrl + 'station/stations?orderedby=' + this.OrderedBy).subscribe(result => {
      this.stations = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }
  getStations(OrderedBy: string):void{
    this.OrderedBy = OrderedBy;
    this.http.get<Station[]>(this.baseUrl + 'station/stations?orderedby=' + this.OrderedBy).subscribe(result => {
      this.stations = result;
    }, error => console.error(error));
  }
}
interface Station {
  code: string;
  name: string;
  latitude: string;
  longitude: string;
}