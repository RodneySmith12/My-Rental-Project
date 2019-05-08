 const Product = require("../model/product");
 const daoCommon = require("../common/daoCommon");

 class ProductDao{
     constructor() {
         this.common = new daoCommon();
    }
    findAll() {
        let sqlRequest = "SELECT * FROM Products";
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for(const row of rows) {
                products.push(new Product(
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
                    row.vendor,
                    row.image
                ));
            }
            return products;
        });
    }
    findOne(id) {
        let sqlRequest = "SELECT * FROM Products WHERE id=" + id;
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for(const row of rows) {
                products.push(new Product(
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
                    row.vendor,
                    row.image
                ));
            }
            return products;
        });
    }
    findByYear(year) {
        let sqlRequest = "SELECT * FROM Products WHERE year=" + year;
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for(const row of rows) {
                products.push(new Product(
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
                    row.vendor,
                    // row.image
                ));
            }
            return products;
        });
    }
 }

 module.exports = ProductDao;