import { Geometry, Feature } from 'geojson';

export class InventionFeature implements Feature {
    type: 'Feature';
    properties: { [name: string]: any };
    geometry: Geometry;

    constructor(
        properties: { [name: string]: any },
        geometry: Geometry) {
            this.properties = properties;
            this.geometry = geometry;
    }
}

