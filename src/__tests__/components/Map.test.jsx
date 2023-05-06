import { act, screen } from '@testing-library/react';
import Map from '../../components/Map';
import { setGeolocation } from '../../redux/slices/geolocation-slice';
import mockIPGeolocationAPIResponse, {
  mockIPGeolocationAPIResponseWithDifferentIP,
} from '../../__mocks__/mockIPGeolocationAPIResponse';
import { renderWithProviders } from '../test-utils';

describe('Map component', () => {
  const preloadedState = { geolocationReducer: { geolocation: mockIPGeolocationAPIResponse } };

  it('should render as expected', () => {
    const { container } = renderWithProviders(<Map />, { preloadedState });
    expect(container).toMatchSnapshot();
  });

  it('should update image if geolocation data changes', () => {
    const { store } = renderWithProviders(<Map />, { preloadedState });
    const initialImgSrc = screen.getByRole('img').src;
    act(() => {
      store.dispatch(setGeolocation(mockIPGeolocationAPIResponseWithDifferentIP));
    });
    expect(screen.getByRole('img').src).not.toBe(initialImgSrc);
  });
});
