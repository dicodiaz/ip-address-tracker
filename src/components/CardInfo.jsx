import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import ColumnInfo from './ColumnInfo';

const CardInfo = ({ geolocation }) => {
  const { ip, location, isp } = geolocation;
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

CardInfo.propTypes = {
  geolocation: PropTypes.shape({
    ip: PropTypes.string,
    isp: PropTypes.string,
    location: PropTypes.shape({
      region: PropTypes.string,
      country: PropTypes.string,
      postalCode: PropTypes.string,
      timezone: PropTypes.string,
    }).isRequired,
  }).isRequired,
};