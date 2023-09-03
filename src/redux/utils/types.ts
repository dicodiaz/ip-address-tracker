export type AsType = {
  asn: number;
  domain: string;
  name: string;
  route: string;
  type: string;
};

export type LocationType = {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode: string;
  region: string;
  timezone: string;
};

export type GeolocationType = {
  as: AsType;
  domains: string[];
  ip: string;
  isp: string;
  location: LocationType;
};

export type GeolocationStateType = {
  geolocation?: GeolocationType;
  loading: boolean;
  error?: string;
};
