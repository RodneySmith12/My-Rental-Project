let sqlite3 = require('sqlite3').verbose(); //verbose means give me the information that you can give me back//
let DB_PATH = "./db/CarRentalDB.db";

const db = new sqlite3.Database(DB_PATH, 
    function (err) {
        if(err){
            console.log(err);
            return 
        }
        console.log("Connected to" + DB_PATH + "database");
        db.exec("PRAGMA foreign_keys = ON;", function(err){
            if(err){
                console.error("PRAGMA statement didnt work");
            }
            else{
                console.log("Foreign Key Enforcement is on.")
            }
        });
    }
);

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

module.exports = {
    init,
    db
}