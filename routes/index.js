const path = require("path")
const router = require("express").Router();
const apiRoutes = require("./api")

//API Routes
router.use("/api", apiRoutes)

module.exports = router

//localhost:3000/api/items/:id is the url path created because /api is set up here, /items and /items/:id are set up through the index.js and items.js within the api folder