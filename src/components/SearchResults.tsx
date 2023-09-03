import { FC } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../hooks/redux-hooks';
import useElementSize from '../hooks/useElementSize';
import { selectGeolocation } from '../redux/slices/geolocationSlice';
import SearchResultsItem from './SearchResultsItem';

const fallbackGeolocation = {
  ip: '',
  location: { region: '', country: '', postalCode: '', timezone: '' },
  isp: '',
};

const SearchResults: FC = () => {
  const geolocation = useAppSelector(selectGeolocation);
  const [squareRef, { height }] = useElementSize();

  const { ip, location, isp } = geolocation ?? fallbackGeolocation;
  const { region, country, postalCode, timezone } = location;

  return (
    <Container as="section" className="z-1100">
      <Card
        className="rounded-4 p-4 p-md-5"
        style={{ marginTop: -height / 2, marginBottom: -height / 2 }}
        ref={squareRef}
      >
        <Row className="mx-0 g-0 justify-content-between" xs={1} md={4}>
          <SearchResultsItem title="IP Address" text={ip} />
          <div className="d-none v-line" />
          <SearchResultsItem
            title="Location"
            text={[region, [country, postalCode].join(' ')].join(', ')}
          />
          <div className="d-none v-line" />
          <SearchResultsItem title="Timezone" text={timezone ? `UTC: ${timezone}` : ''} />
          <div className="d-none v-line" />
          <SearchResultsItem title="ISP" text={isp} />
        </Row>
      </Card>
    </Container>
  );
};

export default SearchResults;
