import L from 'leaflet';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import iconLocation from '../assets/icon-location.svg';

const markerIcon = L.icon({
  iconUrl: iconLocation,
});

const Map = ({ position, setMap }) => {
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

Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  setMap: PropTypes.func.isRequired,
};

export default Map;
