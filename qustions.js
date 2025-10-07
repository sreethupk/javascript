//swap two numbers without using a third variable

let a = 5, b = 10;
console.log("Before swap: a =", a, ", b =", b);

[a,b]=[b,a]
console.log("After swap: a =", a, ", b =", b);

//prgm to find the area of a square
let side = 4;
let areaSquare = side * side;
console.log("Area of square:  ",areaSquare);

//prg, to find the area of rectangle
let length = 5, width = 8;
let areaRectangle = length * width;
console.log("Area of Rectangle: ",areaRectangle);

//check if the given numbr isprime or not
let num = 17;
let isprime = true;

if (num <= 1) {
    isprime = false;
}else{
    for (let i = 2; i < num; i++) {

        if (num % i === 0){
            isprime = false;
            break;
        }
    }
}

if(isprime) {
    console.log(num + "is a prime number");
    
}else{
    console.log(num + "is NOT a prime number");
    
}

//check if the given num is odd or even
let number = 8;

if( number % 2 === 0){
    console.log(number + " is Even");
    
}else{
    console.log(number + "is odd");
    
}






