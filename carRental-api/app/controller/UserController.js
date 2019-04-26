const UserDao = require("../dao/UserDao");
const ControllerCommon = require("./common/controllerCommon");
// const User = require("../model/student");

class StudentController {

    constructor() {
        this.UserDao = new UserDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.UserDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
}

module.exports = UserController;