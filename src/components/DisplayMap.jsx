import { useEffect, useState } from 'react';
import mockIPGeolocationAPIResponse from '../__mocks__/IPGeolocationAPIResponse';
import Map from './Map';

const {
  location: { lat, lng },
} = mockIPGeolocationAPIResponse;
const mapPosition = [lat, lng];

const DisplayMap = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    map?.flyTo(mapPosition, map.getZoom());
  }, [map]);

  return <Map position={mapPosition} setMap={setMap} />;
};

export default DisplayMap;
