

//const promise = new promise((resolve, reject)=>{
    //asynchronous opertaion handile
//})

// resolve -code when the opertaion is success
// reject-code when the operation is failed

//.then = excecute the promise is resolve
//.catch = excecute the promise is rejected
//.finally=excute the promise was either resolve or reject


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