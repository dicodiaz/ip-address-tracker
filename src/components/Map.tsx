import L, { LatLngExpression, Map as MapType } from 'leaflet';
import { FC, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import iconLocation from '../assets/icon-location.svg';
import { useAppSelector } from '../hooks/redux-hooks';
import { selectGeolocation } from '../redux/slices/geolocationSlice';

const markerIcon = L.icon({
  iconUrl: iconLocation,
});

const Map: FC = () => {
  const [map, setMap] = useState<MapType | null>(null);
  const geolocation = useAppSelector(selectGeolocation);
  const { lat, lng } = geolocation?.location ?? {};

  useEffect(() => {
    if (lat && lng) {
      map?.flyTo([lat, lng], map.getZoom());
    }
  }, [map, lat, lng]);

  if (!lat || !lng) {
    return (
      <Container
        as="section"
        className="vh-map d-flex justify-content-center align-items-center bg-secondary"
        fluid
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  const position: LatLngExpression = [lat, lng];

  return (
    <Container as="section" className="px-0" fluid>
      <MapContainer
        className="vh-map"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon} />
      </MapContainer>
    </Container>
  );
};

export default Map;
