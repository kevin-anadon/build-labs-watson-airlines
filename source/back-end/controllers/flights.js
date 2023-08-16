const { request, response } = require("express");
const { Flight } = require("../models");

<<<<<<< HEAD
/**
 * getFlights Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return flights with ORIGIN_AIRPORT, DESTINATION_AIRPORT, DEPARTURE_DATE, AIRLINE as criteria
 */
const getFlights = async (req = request, res = response) => {
  /* #swagger.responses[200] = {
          "description": "OK",
          "content": {
            "application/json": {
              "schema": {
                  "type" : "object",
                  "properties" : {
                      "result" : {
                          "type": "array",
                          "flights": {
                            "$ref": "#/components/schemas/Flight"
                          }
                      }
                  }
              }
            }
          }
      }   
  */
=======
const getFlights = async (req = request, res = response) => {
>>>>>>> 01f6bf1cdb418f7a40e4929efd56b95cc96e038b
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

<<<<<<< HEAD
/**
 * getFlight by ID Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return Flight by ID (mongoID)
 */
const getFlight = async (req = request, res = response) => {
  /* #swagger.responses[200] = {
          "description": "OK",
          "content": {
            "application/json": {
              "schema": {
                  "type" : "object",
                  "properties" : {
                      "result" : {
                          "type": "object",
                          "flight": {
                            "$ref": "#/components/schemas/Flight"
                          }
                      }
                  }
              }
            }
          }
      }   
  */
=======
const getFlight = async (req = request, res = response) => {
>>>>>>> 01f6bf1cdb418f7a40e4929efd56b95cc96e038b
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
