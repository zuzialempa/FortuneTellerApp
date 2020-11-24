import { Component, OnInit } from '@angular/core';
declare var ol: any;

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {
  map: any;
  lat: any;
  lon: any;
  constructor() { }

  ngOnInit(): void {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat( [17.0595711171627, 51.0699370081399]),
        zoom: 8
      })
    });
    this.map.on('click', function (args:any) {
      var lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
      console.log(lonlat);
    });
  }

}
