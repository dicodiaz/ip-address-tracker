import { Col }  from 'react-bootstrap';

const ColumnInfo = ({ title, info }) => {
    return (
      <Col xs={10} md={3} className='line'>
        <h2>{title}</h2>
        <p>{info}</p>
      </Col>
    )
  }

  export default ColumnInfo;