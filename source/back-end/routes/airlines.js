const { Router } = require("express")
const { check } = require("express-validator")
const router = Router()

//Validators
const { validateFields } = require("../middlewares")

// Controller
const {getAirlinesAssocciated, getWatsonAirlineDescription} = require("../controllers/airlines")

router.get("/", [
  // iata_code is required at req.query
  check("IATA_CODE").not().isEmpty(), 
  validateFields
], getAirlinesAssocciated)

router.get("/about",getWatsonAirlineDescription);

module.exports = router