//function that are passed as arguments to other function
//why use callback function
//1.handle as asynchronous operation
//2.avoiding blocking coding execution

function greetUser(name){
    console.log(`hello, ${name}`);
    
}


//this function takes another function (callback)
function greetUserInput(callback){
    const name = "Liyara";
    callback(name);
}

//greetUserInput pass greetuser as a callback
greetUserInput(greetUser);
//call back hell-In JavaScript, Callback Hell happens when too many nested callback functions are used — one inside another — making the code hard to read, debug, and maintain.
