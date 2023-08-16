const { Schema, model } = require('mongoose');

const AirportSchema = Schema({
  IATA_CODE: {
    type: String,
    required: [true, 'Location Identifier required!']
  },
  AIRPORT: {
    type: String,
    required: [true, 'Airport`s name required!'],
  },
  CITY: {
    type: String,
    required: [true, 'Airport`s city required!'],
  },
  STATE: {
    type: String,
    required: [true, 'Airport`s state required!']
  },
  COUNTRY: {
    type: String,
    required: [true, 'Airport`s country required!']
  },
});

module.exports = model('Airport', AirportSchema);
