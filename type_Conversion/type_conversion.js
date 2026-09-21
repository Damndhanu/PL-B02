// 1. type conversion in javascript


// 1. string to number
let num = Number("santosh");

console.log(num);
console.log(typeof(num));


// 2. number to string
    let num2 = String(10);
    console.log(num2);
    console.log(typeof(num2));

    // 3. boolean to number
    let num3 = Number(false);    // true = 1 and false = 0 
    console.log(num3);
    console.log(typeof(num3));

    

//2.Type Coercion

let num4 = 10;
let num5 = " Start Java Script";
 console.log(num4 + num5);  //    10 + Start Java Script  (string concatenation)
console.log(typeof(num4 + num5)); // string