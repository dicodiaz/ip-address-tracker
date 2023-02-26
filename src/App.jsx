import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map';
import mockIPGeolocationAPIResponse from './__mocks__/IPGeolocationAPIResponse';

const {
  location: { lat, lng },
} = mockIPGeolocationAPIResponse;
const mapPosition = [lat, lng];

const App = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    map?.flyTo(mapPosition, map.getZoom());
  }, [map]);

  return <Map position={mapPosition} setMap={setMap} />;
};

export default App;
