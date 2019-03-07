import { Injectable } from '@angular/core';
import { FeatureCollection, Geometry } from 'geojson';
import { Subject, Observable } from 'rxjs';

import { InventionFeature } from '../inventions-list/invention.model';
import inventionsJson from '../../assets/data/inventions.json';


@Injectable()
export class BuildMapService {
    coordinatesChanged = new Subject<number[]>();
    coordinates: number[];

    getInventions() {
        const points: FeatureCollection<Geometry> = {
            type: 'FeatureCollection',
            features: inventionsJson.map(f =>
                new InventionFeature(f.properties, {
                    type: 'Point',
                    coordinates: f.geometry.coordinates
                })
            )
        };
        return points;
    }

    getInventionItem(id: number) {
        const points = this.getInventions();
        return points.features[id];
    }

}
