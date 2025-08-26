//copies a part of the array to another location within the same array.


let arr = [1,2,3,4,5];
arr.copyWithin(0,3);
console.log(arr);




//copyWithin(target,start,end)
//0 - this is the index, where copied elements will be palced
//3 - this is the index to start copying from
//end - stop copy the elements