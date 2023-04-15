import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import iconArrow from '../assets/icon-arrow.svg';
import CardInfo from './CardInfo';
import { selectGeolocation } from '../redux/store';
import { fetchGeolocationFromIpAddress } from '../redux/slices/geolocation-slice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const geolocation = useSelector(selectGeolocation);
  const [inputValue, setInputValue] = useState('');
  const [submitValue, setSubmitValue] = useState('8.8.8.8');

  useEffect(() => {
    dispatch(fetchGeolocationFromIpAddress(submitValue));
  }, [dispatch, submitValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitValue(inputValue);
    setInputValue('');
  };

  return (
    <Container className="px-0 flex-grow-1 bg-search-bar d-flex flex-column" as="section" fluid>
      <h1 className="text-center text-white mt-4 mb-0">IP Address Tracker</h1>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Row className="mx-0 g-0 justify-content-center" xs="auto">
          <Col xs={10} md={6}>
            <Form.Control
              className="form-control-border-radius"
              placeholder="Search for any IP address or domain"
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
              size="lg"
            />
          </Col>
          <Col>
            <Button className="button-border-radius" type="submit" variant="dark" size="lg">
              <Image className="align-baseline" src={iconArrow} />
            </Button>
          </Col>
        </Row>
      </Form>
      <CardInfo geolocation={geolocation} />
    </Container>
  );
};

export default SearchBar;
