const person = {name: "sreethu", age : 20, country:"india"};

//basic destructuring
const {name, age} = person;
console.log(name);
console.log(age);

//rename variables
const {country:  nation} = person;
console.log("nation: ", nation);
 

//default value
const {gender = 'female'} = person;
console.log("gender: " ,gender);

console.log("person..",person);

