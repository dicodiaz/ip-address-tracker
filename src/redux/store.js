import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import localStorageMiddleware from './middlewares/local-storage-middleware';
import geolocationReducer from './slices/geolocation-slice';

const reducer = {
  geolocationReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, localStorageMiddleware),
});

export const selectGeolocation = (state) => state.geolocationReducer.geolocation;

export default store;
