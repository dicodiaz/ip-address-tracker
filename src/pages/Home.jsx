import { Container } from 'react-bootstrap';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <Container className="px-0 d-flex flex-column vh-100" as="main" fluid>
      <SearchBar />
      <Map />
    </Container>
  );
};

export default Home;
