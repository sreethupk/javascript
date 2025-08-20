// object is a collection of key-value pairs.
//used to multiple values in a single variable & the values in a single variable

const person = {
    name:'sreethu',
    age:20,
    isstudent: true

};
console.log(person.name);
console.log(person['age']);

//add or modify datas
person.city = "new york";
person.age = 31;

delete person.city;
console.log(person);



