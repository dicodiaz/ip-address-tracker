import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectGeolocation } from '../redux/store';
import ColumnInfo from './ColumnInfo';

const fallbackGeolocation = {
  ip: '',
  location: { region: '', country: '', postalCode: '', timezone: '' },
  isp: '',
};

const CardInfo = () => {
  const geolocation = useSelector(selectGeolocation);

  const { ip, location, isp } = geolocation ?? fallbackGeolocation;
  const { region, country, postalCode, timezone } = location;

  return (
    <Container className="card-container z-index-3">
      <Row className="py-4 justify-content-between align-items-center d-flex card-info" xs="auto">
        <ColumnInfo title="IP ADDRESS" info={ip} />
        <ColumnInfo title="LOCATION" info={`${region}, ${country}, ${postalCode}`} />
        <ColumnInfo title="TIMEZONE" info={`UTC: ${timezone}`} />
        <ColumnInfo title="ISP" info={isp} />
      </Row>
    </Container>
  );
};

export default CardInfo;
