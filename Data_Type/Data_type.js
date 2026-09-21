//Data Types in JavaScript

//primitives data types
//1.string
let StudentName = "Tommy";
console.log(typeof(StudentName));
//2.number
let StudentAge= 10 ; 
console.log(typeof(StudentAge));

//3.boolean
let studentPass= true;
console.log(typeof(studentPass));

//undefined
 let Studentname2;
 console.log(typeof(Studentname2));

//null   empaty value
let Studentname3 = null;
console.log(typeof(Studentname3));

//bigint
let StudentAge2= 10034876234796236523682423423235424n; 
console.log(typeof(StudentAge2));


//non primitives data types
//1.object
let StudentDetails =
 {

    studentName: "Tommy",
    studentAge: 10,
    studentPass: true
}
console.log(typeof(StudentDetails));
console.log(StudentDetails.studentPass);


//2.array
let StudentDetails2 = ["bunny", 10, true];
console.log(typeof(StudentDetails2));
console.log(StudentDetails2[2]);

