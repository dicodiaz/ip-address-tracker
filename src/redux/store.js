import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import localStorageMiddleware from './middlewares/local-storage-middleware';
import geolocationReducer from './slices/geolocation-slice';

const reducer = {
  geolocationReducer,
};

// The setupStore function allows to create several stores with the same configuration
// This is useful mainly to separate concerns between test and dev/prod environments
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      const middlewares = [];
      // Define which middlewares to add for each separate environment
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
