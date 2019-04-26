const ProductDao = require("../dao/productDao");
const ControllerCommon = require("../common/controllerCommon");

class ProductController{
    constructor() {
        this.productDao = new ProductDao();
        this.common = new ControllerCommon();

    }
    findAll(res) {
        this.productDao.findAll()
        .then(this.common.findSuccess(res))
        .catch(this.common.findError(res));
    }
    findOne(req, res) {
        let id = req.params.id
        this.productDao.findOne(id)
        .then(this.common.findSuccess(res))
        .catch(this.common.findError(res));
    }
    findByYear(req, res) {
        let year = req.params.year
        this.productDao.findByYear(year)
        .then(this.common.findSuccess(res))
        .catch(this.common.findError(res));
    }
}
module.exports = ProductController;