const { Router } = require("express")
const { check } = require("express-validator")
const router = Router()

//Validators
const { validateFields } = require("../middlewares")

// Controllers
const {getFlights, getFlight} = require("../controllers/flights")

router.get("/", [
  check("ORIGIN_AIRPORT", "Origin airport is required").not().isEmpty(),
  check("DESTINATION_AIRPORT", "Destination airport is required").not().isEmpty(),
  check("DEPARTURE_DATE", "Departure date is required").not().isEmpty(),
  check("AIRLINE", "Airline is required").not().isEmpty(),
  validateFields
], getFlights)

router.get("/:id", [
  check("id", "Id is not valid").isMongoId(),
  validateFields
], getFlight)

module.exports = router