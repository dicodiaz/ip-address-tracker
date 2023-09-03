import { Middleware } from '@reduxjs/toolkit';

import { RootState } from '../store';

const localStorageMiddleware: Middleware<Record<string, unknown>, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);
    const { geolocation } = store.getState().geolocationReducer;
    if (geolocation) {
      localStorage.setItem(geolocation.ip, JSON.stringify(geolocation));
    }
    return result;
  };

export default localStorageMiddleware;
