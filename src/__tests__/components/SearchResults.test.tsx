import { expect } from 'vitest';
import SearchResults from '../../components/SearchResults';
import mockGeolocation from '../../__mocks__/mockGeolocation';
import { renderWithProviders } from '../test-utils';

describe('SearchResults component', () => {
  const preloadedState = {
    geolocationReducer: { loading: false, geolocation: mockGeolocation },
  };

  it('should render as expected', async () => {
    const { container } = renderWithProviders(<SearchResults />, { preloadedState });
    expect(container).toMatchSnapshot();
  });
});
