const { Schema, model } = require('mongoose');

const FlightSchema = Schema({
  AIRLINE: {
    type: String,
    required: [true, 'Airline Identifier required!']
  },
  FLIGHT_NUMBER: {
    type: Number,
    required: [true, 'Flight Number required!'],
    // They could be more than one with the same flight number
  },
  ORIGIN_AIRPORT: {
    type: String,
    required: [true, 'Starting Airport (IATA) required!'],
  },
  DESTINATION_AIRPORT: {
    type: String,
    required: [true, 'Destination Airport (IATA) required!']
  },
  CANCELLED: {
    type: Boolean,
    default: false
  },
  DEPARTURE_DATE: {
    type: Date,
  },
  ARRIVAL_DATE: {
    type: Date,
  }
});

module.exports = model('Flight', FlightSchema);
