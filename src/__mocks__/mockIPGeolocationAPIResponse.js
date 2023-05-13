const mockIPGeolocationAPIResponse = {
  ip: '8.8.8.8',
  location: {
    country: 'US',
    region: 'California',
    city: 'Mountain View',
    lat: 37.40599,
    lng: -122.078514,
    postalCode: '94043',
    timezone: '-07:00',
    geonameId: 5375481,
  },
  domains: ['0d2.net', '003725.com', '0f6.b0094c.cn', '007515.com', '0guhi.jocose.cn'],
  as: {
    asn: 15169,
    name: 'Google LLC',
    route: '8.8.8.0/24',
    domain: 'https://about.google/intl/en/',
    type: 'Content',
  },
  isp: 'Google LLC',
};

export const mockIPGeolocationAPIResponseWithDifferentIP = {
  ip: '1.1.1.1',
  location: {
    country: 'US',
    region: 'California',
    city: 'Los Angeles',
    lat: 34.05223,
    lng: -118.24368,
    postalCode: '90001',
    timezone: '-07:00',
    geonameId: 5368361,
  },
  domains: ['28xfy.cc', '7fnsj.cc', '850606.xyz', '98.ws', 'atlasreplymonitoring.it'],
  as: {
    asn: 13335,
    name: 'CLOUDFLARENET',
    route: '1.1.1.0/24',
    domain: 'https://www.cloudflare.com',
    type: 'Content',
  },
  isp: 'Cloudflare, Inc.',
};

export default mockIPGeolocationAPIResponse;
