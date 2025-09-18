//multiple object store in array
const student = [
    {name:"sreethu", age:21, grade:"A"},
    {name:"hasna", age:21, grade:"A+"},
    {name:"vyshna", age:21, grade:"B+"}
]

//accessing data
console.log(student[0].name);
console.log(student[2].age);

//looping through object array
student.forEach(stdnt =>{
    console.log(`${stdnt.name} is ${stdnt.age} years old. `);
    
})

