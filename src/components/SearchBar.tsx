import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import iconArrow from '../assets/icon-arrow.svg';
import { useAppDispatch } from '../hooks/redux-hooks';
import { fetchGeolocationFromIpAddress } from '../redux/slices/geolocationSlice';

const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');
  const [submitValue, setSubmitValue] = useState('8.8.8.8');
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    dispatch(fetchGeolocationFromIpAddress(submitValue));
  }, [dispatch, submitValue]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(inputValue)) {
      setIsInvalid(true);
      return;
    }
    setSubmitValue(inputValue);
    setInputValue('');
    setIsInvalid(false);
  };

  return (
    <Container as="section" className="bg-search-bar flex-grow-1 py-4" fluid>
      <h1 className="text-white text-center mb-3">IP Address Tracker</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mx-0 g-0 justify-content-center">
          <Col className="mw-form-control">
            <Form.Control
              placeholder="Search for any IP address"
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
              size="lg"
              isInvalid={isInvalid}
              aria-label="search-ip"
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid IP address
            </Form.Control.Feedback>
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="dark" size="lg" aria-label="submit">
              <Image className="align-baseline" src={iconArrow} aria-label="icon-arrow" />
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchBar;
