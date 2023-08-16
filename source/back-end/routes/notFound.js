// URL: /api/ OR /
const { Router, request, response } = require("express")
const router = Router()

router.get('/', (req = request, res = response) => {
  res.status(404).send('<h1>404 NOT FOUND</h1>')
})

module.exports = router
