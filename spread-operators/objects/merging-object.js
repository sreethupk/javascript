const obj1 = {name:'apple',color:"red"};
const obj2 = {color:'red',taste:'sweet'};

const merged = {...obj1,...obj2};
console.log(merged);
