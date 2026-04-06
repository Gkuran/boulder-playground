import type { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
  markerLabel = "Você está aqui",
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
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "var(--boulder-radius-lg)",
          overflow: "hidden",
        }}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />

        {showMarker && (
          <Marker position={center}>
            <Popup>{markerLabel}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

