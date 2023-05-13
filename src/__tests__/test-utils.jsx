import { render } from '@testing-library/react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';

/* The renderWithProviders function is meant to be used for every component that interacts with the redux store.
  For every other component (i.e. any component that doesn't interact with the redux store), 
  please use the regular render function exported from @testing-library/react instead. */
// TODO: Remove rule disabling once another utility function is added
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
