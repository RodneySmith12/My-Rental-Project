let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/CarRentalDB.db');

let init = function () {

    db.run("CREATE TABLE if not exists User (" +
        "id INTEGER PRIMARY KEY," +
        " UserName TEXT," +
        " password TEXT," +
        " firstName TEXT," +
        " lastName TEXT," +
        " dob TEXT" +
        " phone TEXT" +
        " email TEXT" +
        ")");
};
let init = function () {

    db.run("CREATE TABLE if not exists Products (" +
        "id INTEGER PRIMARY KEY," +
        " id INTERGER PRIMARY KEY," +
        " make TEXT," +
        " model TEXT," +
        " year TEXT," +
        " color TEXT" +
        " doors TEXT" +
        " seats TEXT" +
        " cargo TEXT" +
        " power TEXT" +
        " miles TEXT" +
        " price TEXT" +
        " vendor TEXT" +
        ")");
};
let init = function () {

    db.run("CREATE TABLE if not exists Orders (" +
        "id INTEGER PRIMARY KEY," +
        " user_id TEXT," +
        " product_id TEXT," +
        " date TEXT," +
        " start date TEXT," +
        " end date TEXT" +
        ")");
};

module.exports = {
    init: init,
    db: db
};