import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import localStorageMiddleware from './middlewares/localStorageMiddleware';
import geolocationReducer from './slices/geolocationSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  geolocationReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    preloadedState,
    reducer: rootReducer,
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
    devTools: import.meta.env.DEV,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
