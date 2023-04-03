import { render } from '@testing-library/react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';

// eslint-disable-next-line import/prefer-default-export
export const renderWithProviders = (
  ui,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions } = {},
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
