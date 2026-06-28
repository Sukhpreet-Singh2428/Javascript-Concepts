//! 3. Operators : 

//* Arithmetic, comparison, logical, assignment, unary, ternary

//?  + - * / % **   <-- arithmetic operators
//?  == === != !== < > <= >=   <-- comparison operators 
//?  = += -= *= /= %=   <-- assignment operators
//?  && || !   <-- logical operators
//?  + - ! typeof ++ --   <-- unary operators
//?  ?:   <-- ternary operators

//* typeof and instanceof

//! typeof tells wrong type for following : 
console.log(typeof null);  //? --> object, which is wrong
console.log(typeof []);    //? --> object, which is wrong
console.log(typeof NaN);   //? --> number, which is wrong

//? Rest are correct
console.log(typeof {});  //? --> object 
console.log(typeof function(){});  //? --> function
//? so on..


//* instanceof
let a = [];
console.log(a instanceof Array);  //? true
let b = {};
console.log(b instanceof Object);  //? true
console.log(b instanceof Array);   //? false

let n = 12;
console.log(n instanceof Number);  //* false
//* so as we see here
//* instanceof works on reference types, not on primitive types

//! typeof  --> used for primitive types
//! instanceof --> used for reference types : [], {}, function(){}


//* Practice : 
//? 1
// let score = 78;

// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
// console.log(grade);  //? --> B

//? 2
// let points = 120;

// let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
// console.log(status);  //? --> Gold

//? 3
// let a = 0;

// if(a){
//     console.log("Truthy");
// }
// else{
//     console.log("Falsy");  //? --> Falsy
// }

//? 4
// let temp = 40;

// if( !(temp < 35) ){
//     console.log("hot");  //? --> hot
// }
// else{
//     console.log("cold");
// }

//? 5
// let loggedIn = true;
// let hasTaken = false;

// let access = loggedIn && hasTaken ? "Allow" : "Deny";
// console.log(access);  //? --> Deny

//? 6
// let a = +"5";
// console.log(a);  //? 5
// console.log(typeof a);  //? number

//? 7 
// console.log(12 == "12");  //? --> true

//? 8
// console.log(12 === "12");  //? --> false

//? 9 
// let x = 3;
// let y = x++; 
// console.log(x, y);  //? --> 4 3

//? 10
// let n = 5;
// let result = n++ + ++n;
// console.log(result);  //? --> 12

//? 11
// let likes = 100;

// function likePost() {
//     return ++likes;
// }

// console.log(likePost());  //? --> 101
// console.log(likes);  //? --> 101

//? 12
// let count = 5;

// if (count-- === 5) {
//     console.log("Matched");  //? --> Matched
// }
// else {
//     console.log("Not Matched");
// }

