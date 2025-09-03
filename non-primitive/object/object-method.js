//you can store function inside objects- these are called object methods

const car = {
    brand:"Toyota",
    start: function(){
        console.log("car started");
        
    }
}

car.start();

//"this keyword- its refers the object its self".(used to access properties)

const person = {
    name:"sreethu",
    age:20,
    greet: function(){
        console.log(`hello, my name is ${this.name}`);
        
    }

}
person.greet();