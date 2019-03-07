import { Component, OnInit } from '@angular/core';
import { Map } from 'mapbox-gl';

import { BuildMapService } from '../map/map.service';
import { InventionFeature } from './invention.model';

@Component({
  selector: 'app-inventions-list',
  templateUrl: './inventions-list.component.html',
  styleUrls: ['./inventions-list.component.css']
})
export class InventionsListComponent implements OnInit {
  inventions: InventionFeature[];
  coordinates: number[];
  map: Map;

  constructor(private buildMapService: BuildMapService) { }

  ngOnInit() {
    this.inventions = this.buildMapService.getInventions().features;
   }

  setNewCoordinates(coordinates) {
    this.buildMapService.coordinates = coordinates;
    this.buildMapService.coordinatesChanged.next(coordinates);
  }
}
