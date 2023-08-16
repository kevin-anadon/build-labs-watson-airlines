const { request, response } = require("express");
const fs = require("fs");
const path = require("path");
const { Airline } = require("../models");

const DESC_PATH = path.join(__dirname, "../resources/watsonAirlineDescription.txt");

/**
 * getAirlinesAssocciated controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return Airlines Assocciated with the IATA_CODE
 */
const getAirlinesAssocciated = async (req = request, res = response) => {
  /* #swagger.responses[200] = {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                    "type" : "object",
                    "properties" : {
                        "result" : {
                            "type": "array",
                            "airlines": {
                              "$ref": "#/components/schemas/Airline"
                            }
                        }
                    }
                }
              }
            }
        }   
    */
  try {
    const { IATA_CODE } = req.query;
    const airlines = await Airline.find({ IATA_CODE });
    res.status(200).json({
      airlines
    });
  } catch (error) {
      res.status(503).json(error.message);
  }
}

/**
 * getWatsonAirlineDescription Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return Watson Airline Description
 */
const getWatsonAirlineDescription = (req = request, res = response) => {
  /* #swagger.responses[200] = {
          "description": "OK",
          "content": {
            "result" : {
                "type": "object",
                "watsonAirlineDescription": {
                  "message": "#/resources/watsonAirlineDescription.txt"
                }
            }
          }
      }   
  */
  try {
    const watsonAirlineDescription = fs.readFileSync(DESC_PATH, 'utf-8')
    res.status(200).json({
      message: watsonAirlineDescription
    });
  } catch (error) {
      res.status(503).json(error.message);
  }
}

module.exports = {
  getAirlinesAssocciated,
  getWatsonAirlineDescription
};
