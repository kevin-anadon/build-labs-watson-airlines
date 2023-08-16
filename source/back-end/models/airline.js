const { Schema, model } = require('mongoose');

const AirlineSchema = Schema({
  IATA_CODE: {
    type: String,
    required: [true, 'Airline`s identifier required!']
    // They could be more than one with the same iata code
  },
  AIRLINE: {
    type: String,
    required: [true, 'Airline`s name required!'],
  },
});

module.exports = model('Airline', AirlineSchema);
