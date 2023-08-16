const { Router } = require("express")
const { check } = require("express-validator")
const router = Router()

//Validators
const { validateFields } = require("../middlewares")

// Controller
const {getAssocciatedAirlines, getWatsonAirlineDescription} = require("../controllers/airlines")

router.get("/", [
  // iata_code is required at req.query
  check("IATA_CODE").not().isEmpty(), 
  validateFields
], getAssocciatedAirlines)

router.get("/about",getWatsonAirlineDescription);

module.exports = router