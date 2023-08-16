const { request, response } = require("express");
const { Flight } = require("../models");

const getFlights = async (req = request, res = response) => {
  try {
    const { ORIGIN_AIRPORT, DESTINATION_AIRPORT, DEPARTURE_DATE, AIRLINE } = req.query;
    const [month, year, day] = DEPARTURE_DATE.split("-")

    const flights = await Flight.find({ 
      ORIGIN_AIRPORT, 
      DESTINATION_AIRPORT,
      AIRLINE,
      // FIND BY EXACT DATE
      $expr: {
       $and: [
         { $eq: [{ $year: "$DEPARTURE_DATE" }, parseInt(year)] },
         { $eq: [{ $month: "$DEPARTURE_DATE" }, parseInt(month)] },
         { $eq: [{ $dayOfMonth: "$DEPARTURE_DATE" }, parseInt(day)] }
       ]
     },
    });
    res.status(200).json({
      flights
    });
  } catch (error) {
      res.status(503).json(error.message);
  }
}

const getFlight = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const flight = await Flight.findById(id);
    res.status(200).json({
      flight
    });
  } catch (error) {
      res.status(503).json(error.message);
  }
}

module.exports = {
  getFlights,
  getFlight,
};
