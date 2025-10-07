const prompt = require('prompt-sync')();

let answer = prompt("enter true or false:");

let myPromise = new Promise((resolve, reject) => { //creating to new promise
    let success = false;

    setTimeout(() => {
        if (success){
            resolve('Promise resolve successfuly!')
    }else {
        reject('Promise rejected')
    }
    }, 2000)
})

myPromise
    .then(result =>console.log(result)) // then the promise is resolved
    .catch(Error =>console.log(Error))// then the promise is rejected
    .finally(()=>console.log("Promise exicution finished"))// always working

    //browswer method
    //user input nalkaan input box kodukaan