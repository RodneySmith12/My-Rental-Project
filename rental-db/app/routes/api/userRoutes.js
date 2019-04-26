const express = require("express");
const router = express.Router();

const UserController = require("../../controller/userController");
const userController = new UserController();

//http request what get is. making get request 
router.get("/", function (req, res){
    //saying give me all the products
    userController.findAll(res);
});

router.get("/:id", function (req, res){
    //saying give me all the products
    userController.findOne(req, res);
});

module.exports = router;