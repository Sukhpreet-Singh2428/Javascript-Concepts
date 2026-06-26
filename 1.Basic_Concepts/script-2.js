//* 2. Data Types + Type System

//! Data Types : 
//? 1) primitives types
//? 2) reference types

//* 1) primitives --> aisi saari values jinko copy karne par tumhe ek real copy mil jaye
//?               => string, number, boolean, null, undefined, symbol, bigint
//* 2) reference --> inko copy karne par real copy nahi milegi but aapko reference milega parent ka
//?              => arrays, objects, functions


//! string : 
//*  ''  --> single quotes
//*  ""  --> double quotes
//*  ``  --> backticks

//! number : 
//*  12  --> number
//*  12.3  --> number

//! boolean : 
//* true and false
//? let a = true
//? let b = false

//! null : 
//? null ka matlab hai aapne jaan boojh kar koi value nahi di

//! undefined : 
//? undefined ka matlab ki aapne ek variable banaya aur usey value nahi di
//? to jo value by default mili wo hai undefined 

//! symbol : 
//? sybmol --> unique immutable value

//? future mein hum koi libraries use karege ab is case mein un libraries mein
//? kai baar kuch fields hoti hai jinse similar hum bhi banaa dete hai aur
//? galti se humaari banaai hui fields uss library ki original fields ko change kar deta hai

//*  sybmol --> unique immutable value
// let obj = {
//     uid: 1,
//     name: "Sukhpreet", 
//     age: 19
// }

// let u1 = Symbol("uid");
// obj[u1] = "001";

// console.log(obj);
//* { uid: 1, name: 'Sukhpreet', age: 19, [Symbol(uid)]: '001' }

//! bigint
//? to take or hold bigger number than Number.MAX_SAFE_INTEGER
//? [as if we try to add some number in Number.MAX_SAFE_INTEGER like + 1, + 2, .... then calculation starts becoming unprecise or unpredictable or wrong]

// console.log(Number.MAX_SAFE_INTEGER);  //? 9007199254740991

// let a = 9007199254740991n;  //* <= bigint
// a = a + 2n;
// console.log(a);


//! arrays : 
// let a = [1, 2, 3];
// let b = a;
// b.pop();
// console.log(b);  //? [ 1, 2 ]
// console.log(a);  //? [ 1, 2 ]

//! objects : 
// let a = {
//     name: "Sukhpreet"
// };

// let b = a;
// b.name = "Meliodas"
// console.log(b);  //? { name: 'Meliodas' }
// console.log(a);  //? { name: 'Meliodas' }



//! Dynamic typing : 
//* Dynamic typing => js mein static typing nahi hai and yaha par hai 
//*                   dynamic typing jiska matlab hai aap data ko change
//*                   kar skte ho kyuki yaha par dynamic data types hai

// let a = 12;
// console.log(a);
// a = true;
// console.log(a);
// a = "hero";
// console.log(a);
// a = null;
// console.log(a);
// a = [];
// console.log(a);


//! typeof quirks :  (eg:  typeof null === 'object')
// console.log(typeof 12);  //? number
// console.log(typeof "Sukhpreet");  //? string
// console.log(typeof null);  //* object
// console.log(typeof NaN);  //* number


//! Type coercion  (== vs ===) : 
//* type coercion => concept jismein aapka ek type automatically convert hojaayega

// let a = "5" + 1;
// console.log(a);  //? '51'
// let b = "5" - 1;
// console.log(b);  //? 4
// //* as + can act in 2 ways : add or concat, so javascript thinks whenever there is atleast one string operand then user + mainly for concatatination purpose. That's why number convert to string
// //* and - is only act in 1 ways i.e, to subtract so that's why string convert to number
// let c = "5" * 3;  
// console.log(c);  //? 15
// let d = "5" * "3";
// console.log(d);  //? 15, still gives number 15 as * only acts as multiple thinks. That's why they treated as number
// console.log(typeof d);  //? number
//* Info : 
// let e = "sukhpreet" * 29;
// console.log(e); //? NaN


//! == vs ===
//* ==  --> checks value only, not data type
//* ===  --> checks both value and data type


//! Truthy vs falsy values : 
//*  0  false  ""  null  undefined  NaN  document.all  <-- falsy values <-- false
//* Everything/all except above values  <-- truthy values <-- true

// if(null){
//     console.log("hey");
// }
// //? null --> falsy value --> false --> nothing prints

// if(-1){
//     console.log("heyy");
// }
// //? -1 --> truthy value (as not from set of falsy values) --> true --> prints heyy




//! Additional Info
// let a = true + false;  //* 1 + 0 = 1  [true converts into 1 and false converts into 0 as + here acts for additon so there also automatically changes into number]
// console.log(a); //? 1

// let a = null + 1;  //* 0 + 1 = 1  [null is falsy value --> false convert into 0 --> 0 + 1 = 1]
// console.log(a);  //? 1

// let a = 5 + "5";
// console.log(a);  //? '55'

// let a = !!undefined;  //* undefined --> falsy value --> false --> !!false --> !(true) --> false
// console.log(a);  //? false

// let a = "sukhpreet" * 29;
// console.log(a); //? NaN

// let a = typeof NaN === 'number';
// console.log(a);  //? ture
//* NaN  --> Not a Number
//* Whenever there is a failed number operation happens, js gives NaN as value
//* So NaN is failed number operation like 29 * "Sukhpreet", it gives NaN
//* so typeof NaN === 'number'