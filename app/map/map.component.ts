import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { MapMouseEvent, Map } from 'mapbox-gl';

import { BuildMapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  points: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
  selectedPoint: GeoJSON.Feature<GeoJSON.Geometry> | null;
  coordinates = this.buildMapService.coordinates;
  cursorStyle: string;
  map: Map;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private buildMapService: BuildMapService) {
      this.buildMapService.coordinatesChanged
        .subscribe((coordinates: number[]) => {
            this.coordinates = coordinates;
      });
  }

  ngOnInit() {
    this.points = this.buildMapService.getInventions();
    this.coordinates = [-81.68129, 41.505493];
  }

  onClick(evt: MapMouseEvent) {
    this.selectedPoint = null;
    this.changeDetectorRef.detectChanges();
    this.selectedPoint = (<any>evt).features[0];
  }

}
