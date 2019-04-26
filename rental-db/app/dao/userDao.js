 const User = require("../model/user");
 const daoCommon = require("../common/daoCommon");

 class UserDao{
     constructor() {
         this.common = new daoCommon();
    }
    findAll() {
        let sqlRequest = "SELECT * FROM User";
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for(const row of rows) {
                users.push(new User(
                    row.id,
                    row.userName,
                    row.password,
                    row.firstName,
                    row.lastName,
                    row.dob,
                    row.phone,
                    row.email,
                ));
            }
            return users;
        });
    }
    findOne(id) {
        let sqlRequest = "SELECT * FROM User WHERE id=" + id;
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for(const row of rows) {
                users.push(new User(
                    row.id,
                    row.make,
                    row.model,
                    row.year,
                    row.color,
                    row.doors,
                    row.seats,
                    row.cargo,
                    row.power,
                    row.miles,
                    row.price,
                    row.vendor
                ));
            }
            return users;
        });
    }
 }

 module.exports = UserDao;