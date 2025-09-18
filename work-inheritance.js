class vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;

    }
    move() {
        console.log(`${this.brand} ${this.model} make a sound`);

    }
}

class car extends vehicle {
    constructor(brand, model, color) {
        super(brand, model);
        this.color = color;
    }
    start() {
        console.log(`${this.brand} ${this.model} ${this.color} its moving`);

    }
}

const mycar = new car("Toyota", "Fortuner", "black")
mycar.move();
mycar.start();