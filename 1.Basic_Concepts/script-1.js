
//* 1. Variables and declarations :

//! var, let, const   : 

// var username = "Sukhpreet";
// console.log(username);
// var username = "Yanev";
// console.log(username);

// var a;   //? declarations
// a = 12;   //? declarations and initialization
// var a = 12;
//! a = 12;   <-- this one is also var

// let a = 12;
// console.log(a);
// a = 13;
// console.log(a);

// const a = 12;
//! const a;   <-- can't do this !! this is an error
// console.log(a);


//* var : 
// var a = 12;
//* window mein add hota hai 
//* function scoped hota hai 
//* aap firse declare kar skte ho same name se and error nahi aayega
//* we never use var in production or in projects
//* functional scoped hai hai var, means: 
// function abcd(){
//     if(true){
//         var a = 10;
//     }
// }
//* In other programming languages, variables declare in if are only usable till if
//* But in js, we can using 'a' variable in whole function bcz 'a' is declare as var
//* and var is functional scoped. That's why we use prefer to use 
//* let as let is block scoped. let aapne { } me rahta hai 
function abcd(){
    var a = 10;
    if(true){
        let b = 20;
    }
}
//* here 'b' remains in its if block. let always available in its parent { }

//* let : 
// let a = 12;
//* let is more better and secure than var
//* can't re-declare
//* let is block scoped
//* only change the assigned value

//* const : 
// const a = 12;
//* constant value


//! Scope (global, block, functional)

//? global : 
// var a = 10;
// let c = 10;

//? functional : 
// function abcd(){
//     var a = 10;
//     let x = 12;
// }

//? block : 
// {
//     let b = 12;
// }
//* But if we use use var 
// {
//     var b = 12;
// }
//* since var is functional scope and var doesn't respect the block 
//* so this will become global, we can use 'b' in whole program


//! Reassignment, redeclaration : 

// var a = 12;
// a = 32;  //? reassignment

// var a = 32;  //? redeclaration

// let b = 12;
// b = 32;  //? reassignment

// let b = 433;  //! Error, let can't be redeclaration 

//* var => reassignment, redeclaration
//* let => reassignment


//! Temporal Dead Zone : 

//* 1 : 
// console.log(a);  //? error => Cannot find name 'a'

//* 2 : 
// console.log(a);  //? error => ReferenceError : cannot access 'a' before initialization
// let a = 12;

//* Means here, JS knows that "a" exist even at the console.log line but can't use it as it declare after this language
//? TDZ => utna area jitne mein js ko pata toh hai ki variable exist karta hai par wo aapko value nhi de sakta

//* But in case of var : 
// console.log(a);  //? This one can run and gives undefined
// var a = 12;


//! Hoisting impact per type : 

//* Hoisting => ek variable ko jab js mein banaate hai to wo variable do hisso
//*             mein toot jaata hai and uska declare part upar chala jaata hai
//*             uska intialization part neeche reh jata hai 

// var a = 12;
//* It's divide into these 2 parts : 
// var a = undefined;
// a = 12;

//? and due to hoisting (defined above) :
//* There is no error and code (below code) gives undefined 
// console.log(a);
// var a = 12;

//? for let, there is also hoisting happens
//* But for let, we can access let variable before its initizalation
//* so that's why : 
// console.log(a);  //? error => ReferenceError : cannot access 'a' before initialization
// let a = 12;

//* var --> hoist --> undefined
//* let --> hoist --> X
//* const --> hoist --> X