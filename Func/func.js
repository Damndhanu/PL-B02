// function Demo()
// {
//    console.log("Welcome to Function Concept")
// }
// Demo();
 

// output :
// Add = 5 
// a=5 , b=4 ;
// console.log(a+b)
//

//parameteried function 
// function Addition(a,b)      // parameters 
// {
//     console.log(a+b);
// }

// Addition(65645,978685656);    //arguments 
// Addition(5,0);
// Addition(1,2)

// //normal function 
// function Sub()
// { 
//      let a=4 , b=9
//     console.log(a-b);
// }
// Sub();

//retrun keyword 

// function div(c,d)
// {
//       return c/d;    //5
// }

//  let result = div(10,5);
//  console.log(result)


 //anotomonus fucntion   // without fucntion name 
//     let result = (a,b) => a+b
// console.log(result(9,7));

//call back fucntion 

function greet(name)
{
    console.log(name);
}

function process(call){      //0001    call = greet 

    call("Dhanush");
}

process(greet);       greet //00001