// URL: /api/

const { Router } = require("express")
const router = Router()


router.get('/', (req, res) => {
  res.status(404).send('<h1>404 NOT FOUND</h1>')
})

module.exports = router
