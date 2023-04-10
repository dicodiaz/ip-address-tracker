import L from 'leaflet';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import iconLocation from '../assets/icon-location.svg';
import { selectGeolocation } from '../redux/store';

const markerIcon = L.icon({
  iconUrl: iconLocation,
});

const Map = () => {
  const [map, setMap] = useState(null);
  const geolocation = useSelector(selectGeolocation);
  const { lat, lng } = geolocation?.location ?? {};

  useEffect(() => {
    if (lat && lng) {
      map?.flyTo([lat, lng], map.getZoom());
    }
  }, [map, lat, lng]);

  if (!lat || !lng) {
    return null;
  }

  const position = [lat, lng];

  return (
    <Container className="px-0" as="section" fluid>
      <MapContainer
        className="h-map"
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
