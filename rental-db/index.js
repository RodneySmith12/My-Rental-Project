//Load modules
const express = require("express");
const app = express();
const cors = require("cors");
//allows you to send data to the api
 const bodyParser = require("body-parser");
 //
 const router = require("./app/routes/router");

 //Database configuration
 const database = require("./app/config/dbconfig");

 database.init();

 app.listen(8000, function() {
    console.log("Server is listening on port:8000");
 });

 // Init
 //the way you api cant recieve data
 app.use(cors());
 app.use(bodyParser.urlencoded(
{extended:false}));
app.use(bodyParser.json());

app.use("/api",router);
