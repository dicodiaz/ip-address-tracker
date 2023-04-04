const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { geolocation } = store.getState().geolocationReducer;
  if (geolocation) {
    localStorage.setItem(geolocation.ip, JSON.stringify(geolocation));
  }
  return result;
};

export default localStorageMiddleware;
