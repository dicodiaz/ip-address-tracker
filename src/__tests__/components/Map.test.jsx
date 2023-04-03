import Map from '../../components/Map';
import mockIPGeolocationAPIResponse from '../../__mocks__/mockIPGeolocationAPIResponse';
import { renderWithProviders } from '../test-utils';

describe('Map component', () => {
  it('should render as expected', () => {
    const preloadedState = { geolocationReducer: { geolocation: mockIPGeolocationAPIResponse } };
    const { container } = renderWithProviders(<Map />, { preloadedState });
    expect(container).toMatchSnapshot();
  });
});
