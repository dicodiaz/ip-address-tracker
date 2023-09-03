import { act, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Map from '../../components/Map';
import { setGeolocation } from '../../redux/slices/geolocationSlice';
import mockGeolocation, { mockGeolocationWithDifferentIP } from '../../__mocks__/mockGeolocation';
import { renderWithProviders } from '../test-utils';

describe('Map component', () => {
  const preloadedState = {
    geolocationReducer: { loading: false, geolocation: mockGeolocation },
  };

  it('should render as expected', () => {
    const { container } = renderWithProviders(<Map />, { preloadedState });
    expect(container).toMatchSnapshot();
  });

  it('should update image when geolocation data changes', () => {
    const { store } = renderWithProviders(<Map />, { preloadedState });
    const initialImgSrc = (screen.getByRole('img') as HTMLImageElement).src;
    act(() => {
      store.dispatch(setGeolocation(mockGeolocationWithDifferentIP));
    });
    expect((screen.getByRole('img') as HTMLImageElement).src).not.toBe(initialImgSrc);
  });

  it("should render spinner when there's no geolocation data", () => {
    const newPreloadedState = { geolocationReducer: { loading: false } };
    const { container } = renderWithProviders(<Map />, { preloadedState: newPreloadedState });
    expect(container).toMatchSnapshot();
  });
});
