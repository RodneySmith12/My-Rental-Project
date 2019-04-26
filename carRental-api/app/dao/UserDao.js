const User = require('../model/User');

const daoCommon = require('./common/daoCommon');

class UserDao {
    constructor() {
        this.common = new daoCommon();
    }

    findAll() {
        //code here 
        let sqlRequest = "SELECT * FROM User ORDER BY lastName ASC";
        return this.common.findAll(sqlRequest).then(rows => {
            let user = [];
            for (const row of rows) {
                user.push(new User(
                    row.id = id,
                    row.userName = userName,
                    row.password = password,
                    row.firstName = firstName,
                    row.lastName = lastName,
                    row.dob = dob,
                    row.phone = phone,
                    row.email = email
                    )
                )
            }
            return user;
        });
    }
}
module.exports = UserDao;