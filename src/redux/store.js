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
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger, localStorageMiddleware),
  });
};

export const selectGeolocation = (state) => state.geolocationReducer.geolocation;
