const express = require("express");
const router = express.Router();

const ProductController = require("../../controller/productController");
const productController = new ProductController();

//http request what get is. making get request 
router.get("/", function (req, res){
    //saying give me all the products
    productController.findAll(res);
});

router.get("/year/:year", function (req, res){
    //saying give me all the products
    productController.findByYear(req, res);
});

router.get("/:id", function (req, res){
    //saying give me all the products
    productController.findOne(req, res);
});

module.exports = router;