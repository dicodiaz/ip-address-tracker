import { FC } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const App: FC = () => {
  return (
    <Container className="px-0 d-flex flex-column vh-100" as="main" fluid>
      <SearchBar />
      <SearchResults />
      <Map />
    </Container>
  );
};

export default App;
