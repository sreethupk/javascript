class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    move(){
        console.log(this.brand + " make a good sound");
    }
    }

    class Car extends Vehicle{
        drive(){
            console.log(this.color+ " its black color");
        }
    }

    let myCar = new Car("RANGE ROVER");
    myCar.move();
    myCar.drive();