import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const ColumnInfo = ({ title, info }) => {
  return (
    <Col xs={10} md={3} className="line">
      <h2>{title}</h2>
      <p>{info}</p>
    </Col>
  );
};

ColumnInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default ColumnInfo;
