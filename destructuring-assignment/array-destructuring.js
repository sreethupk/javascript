const number = [10,20,30,40];

//basic destructuring
const [a,b]= number;
console.log(a);
console.log(b);

//skipping values
const[, , c] = number;
console.log(c);

//using rest operator
const [x,...rest] = number;
console.log("x is: ",x);
console.log(rest);


