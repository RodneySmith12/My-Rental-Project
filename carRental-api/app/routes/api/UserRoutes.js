const express = require("express");
const router = express.Router();

// controller here
const UserController = require("../../controller/UserController");
const UserController = new UserController();

// User routes
router.get("/", function (req, res) {
    UserController.findAll(res);
    // res.send([{hello:"world"}]);
});

module.exports = router;