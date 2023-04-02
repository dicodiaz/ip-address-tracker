import { configureStore } from '@reduxjs/toolkit';
import geolocationSlice from './slices/geolocation-slice';

const store = configureStore({
  reducer: { geolocationSlice },
});

export const selectGeolocation = (state) => state.geolocationSlice.geolocation;

export default store;
