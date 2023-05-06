import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import localStorageMiddleware from './middlewares/local-storage-middleware';
import geolocationReducer from './slices/geolocation-slice';

const reducer = {
  geolocationReducer,
};

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      const middlewares = [];
      switch (import.meta.env.MODE) {
        case 'development':
          middlewares.push(localStorageMiddleware, logger);
          break;
        case 'production':
          middlewares.push(localStorageMiddleware);
          break;
        case 'test':
          middlewares.push(/* Add middlewares to test environment */);
          break;
        default:
      }
      return getDefaultMiddleware().concat(...middlewares);
    },
  });
};

export const selectGeolocation = (state) => state.geolocationReducer.geolocation;
