const { request, response } = require("express");
const fs = require("fs");
const path = require("path");
const { Airline } = require("../models");

const DESC_PATH = path.join(__dirname, "../resources/watsonAirlineDescription.txt");

const getAirlinesAssocciated = async (req = request, res = response) => {
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

const getWatsonAirlineDescription = (req = request, res = response) => {
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
