import { FC } from 'react';
import { Col } from 'react-bootstrap';

export type SearchResultsItemProps = {
  title: string;
  text: string;
};

const SearchResultsItem: FC<SearchResultsItemProps> = ({ title, text }) => {
  return (
    <Col>
      <h6 className="search-results-item-title">{title}</h6>
      <p className="search-results-item-text">{text}</p>
    </Col>
  );
};

export default SearchResultsItem;
