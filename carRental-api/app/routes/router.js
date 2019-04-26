const express = require("express");
const router = express.Router();

router.use("/User", require("./api/UserRoutes"));

//add more api routes here

module.exports = router;