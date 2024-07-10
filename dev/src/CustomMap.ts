import * as L from 'leaflet';
import { Company } from './Company';
import { User } from './User';

import * as L from 'leaflet';

export class CustomMap {
  private map: L.Map;
  private mapElementId: string;
  private defaultCoords: L.LatLngExpression;

  constructor(mapElementId: string, defaultCoords: L.LatLngExpression) {
    this.mapElementId = mapElementId;
    this.defaultCoords = defaultCoords;
    this.initMap();
  }

  private initMap(): void {
    if (document.getElementById(this.mapElementId)) {
      this.map = L.map(this.mapElementId).setView(this.defaultCoords, 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
    } else {
      console.error(`Map container '${this.mapElementId}' not found.`);
    }
  }

  public addMarker(coords: L.LatLngExpression): void {
    if (!this.map) {
      console.error(`Map not initialized for '${this.mapElementId}'.`);
      return;
    }

    const marker = L.marker(coords).addTo(this.map);
    marker.bindPopup('Marker').openPopup();
  }
}
