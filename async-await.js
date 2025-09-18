//asyn = make a function that will return a promise
//await = pauses the function execution untill the promise is resolved or rejected
//look & behave like synchronous(more efficient & responsive)


function fetchData() {
    return newPromise((resolve) => {
        setTimeout(() => {
            resolve("data loaded!")
        }, 2000)
    });
}

async function getData(){
    console.log("start");
    
    const result=await fetchData(); //until the promise is resolved
    console.log(result);

    console.log("end");
}
getData();