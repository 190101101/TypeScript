import * as L from 'leaflet';

interface Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  private map: L.Map;
  private mapElementId: string;
  private defaultCoords: L.LatLngExpression;
  private clickListener: L.LeafletEventHandlerFn | null;

  constructor(mapElementId: string, defaultCoords: L.LatLngExpression) {
    this.mapElementId = mapElementId;
    this.defaultCoords = defaultCoords;
    this.clickListener = null;
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

  public addMarker(mappable: Mappable): void {
    if (!this.map) {
      console.error(`Map not initialized for '${this.mapElementId}'.`);
      return;
    }

    const marker = L.marker(mappable.location).addTo(this.map);
    marker.bindPopup(mappable.name).openPopup();

    console.log(`Added marker: ${mappable.name}`);
    console.log(`Location: ${mappable.location.lat}, ${mappable.location.lng}`);
  }

  public startListeningForClick(): void {
    if (this.map && !this.clickListener) {
      this.clickListener = (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        const markerName = prompt('enter marker name:');

        if (markerName) {
          const newMarker: Mappable = {
            name: markerName,
            location: {
              lat,
              lng,
            },
          };

          this.addMarker(newMarker);
        }
      };

      this.map.on('click', this.clickListener);
    }
  }
}
