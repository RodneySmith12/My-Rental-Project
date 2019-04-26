const UserDao = require("../dao/userDao");
const ControllerCommon = require("../common/controllerCommon");

class UserController{
    constructor() {
        this.userDao = new UserDao();
        this.common = new ControllerCommon();

    }
    findAll(res) {
        this.userDao.findAll()
        .then(this.common.findSuccess(res))
        .catch(this.common.findError(res));
    }
    // findOne(req, res) {
    //     let id = req.params.id
    //     this.productDao.findOne(id)
    //     .then(this.common.findSuccess(res))
    //     .catch(this.common.findError(res));
    // }
    // findByYear(req, res) {
    //     let year = req.params.year
    //     this.productDao.findByYear(year)
    //     .then(this.common.findSuccess(res))
    //     .catch(this.common.findError(res));
    // }
}
module.exports = UserController;