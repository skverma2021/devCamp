const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER,

  // Optional depending on the providers
  // fetch: customFetchImplementation,
  httpAdapter: 'https',
  apiKey: 'AIzaSyBSjX1li4Ag1a5ecDhmXoVzjTJtBE0ekkU', // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
