import type { LatLngExpression } from "leaflet";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  ScaleControl,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

type MapViewProps = {
  center?: LatLngExpression;
  zoom?: number;
  height?: number | string;
  className?: string;
  showMarker?: boolean;
  markerLabel?: string;
};

export function MapView({
  center = [-30.03, -51.23],
  zoom = 13,
  height = "100%",
  className,
  showMarker = true,
  markerLabel = "You are here",
}: MapViewProps) {
  return (
    <div
      className={className}
      style={{
        height,
        width: "100%",
        display: "flex",
      }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        zoomControl={false}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "var(--boulder-radius-lg)",
          overflow: "hidden",
        }}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap Humanitarian">
            <TileLayer
              attribution='Tiles courtesy of <a href="https://www.hotosm.org/" target="_blank" rel="noreferrer">Humanitarian OpenStreetMap Team</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <ScaleControl imperial={false} position="bottomleft" />

        {showMarker && (
          <Marker position={center}>
            <Popup>{markerLabel}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

