const express = require("express");
const router = express.Router();

router.use("/product", require("./api/productRoutes"));

router.use("/user", require("./api/userRoutes"));

module.exports = router;