// let arr = [10, 20,"steno" , true];   // arrauy declare 

// for(let a=0 ; a<arr.length;a++)     // a=9    9<9  
// {
// console.log(arr[a]);                 //arr[3]    value : 10 , 20 , 30 , 40 , 50 , 60 ,70, 80, 90
// }

let arr = [1, 2];
arr.push(3);
console.log(arr)

// remove 
//arr.pop(); // removes 3
//console.log(arr)

//remove first elment 
arr.shift();
console.log(arr)


//uynshift 
arr.unshift();


// 5. indexOf()

// 👉 Find position

let arr1 = [10, 20, 30];
console.log(arr1.indexOf(30)); // 1

arr1.reverse();
console.log(arr1)

//merge 
let a = [1, 2];
let b = [3, 4];

console.log(a.concat(b));

// 🟢 12. splice() 🔥 IMPORTANT

// 👉 Add/remove elements

let arr2 = [1, 2, 3];
arr2.splice(1, 2); // remove 2
console.log(arr2)
