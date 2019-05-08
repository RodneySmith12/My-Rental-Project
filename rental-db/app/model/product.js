class Product {
    constructor(id,make,model,year,color,doors,seats,cargo,power,miles,price,vendor, image){
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.doors = doors;
        this.seats = seats;
        this.cargo = cargo;
        this.power = power;
        this.miles = miles;
        this.price = price;
        this.vendor = vendor;
        this.image = image;
    }
}

module.exports = Product;