//way of fuction define ,assing in to variable,inside an expression
//it's not hoisting
//it a way to define function inside an expression & assign it to a variable

//key features
//1.anonymous or named
//2.not hoisted
//3.can be used as argument
//4.can be assigned to variable/object

const sayHello = function(){
    console.log("hello");
    
}

sayHello();


//---example for object------
const math = {
    add : function(a,b){
        return a + b;
    }
}

console.log(math.add(5,3));//parameter
