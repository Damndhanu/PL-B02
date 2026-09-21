// //  Operators in JavaScript

// // 1. Arithmetic Operators

// let x = 10;
// let y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);   // remainder 
// console.log(x ** y);   // 10 to the power of 5 

// // 2. Assignment Operators

// x *= 5;   // x = x * 5
// console.log(x);


// // 3. Comparison Operators

// let a = 10;

// let b = 5;

// console.log(a == b);  // true

// console.log(a === b);  // true     checks both value and data type

// console.log(a != b);  // false

// console.log(a !== b);  // false     checks both value and data type

// console.log(a > b);  // true

// console.log(a < b);  // false


// 4. Logical Operators

let c = true;
let d = false;
console.log("-------------------AND---------");  // true only if both are true or else false
console.log(c && d);  // false
console.log("-------------------OR---------");  // true if any one is true or else false
console.log(c || d);  // true
     
console.log("-------------------NOT---------"); // true if false and false if true
console.log(!c);

console.log(!d);
console.log(!(c && d))

console.log("-------------------Ternary---------");  // true if false and false if true

// condition ? trueValue : falseValue;   //synax of ternary operator
 

let john_age = 18;
let Tom_age = 20;
  let result = (john_age >=Tom_age ) ?   "John is older than Tom" :  "Tom is not older than John";
                //(18>=20) 
  console.log(result);

  //string concatenation operator
  let name = "Tommy" + " a good boy";
  console.log(name);