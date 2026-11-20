myName
isUserLoggedIn
countryOfBirth
placeOfBirth


is_user_log_in



camelCase: firstName,  first_name, is

//Rules for naming variables
//Good: firstName, lastName, _accountbalance, $hello

var myName = "John"
var fullName = "John Doe";
console.log(fullName);
var fullName = "Amanda Sax";
fullName = "Jonathan Window";
console.log(fullName);

//let
/*
- it is block scoped
- it can be reassigned
- it cannot be redeclared
- it allows declaring a variable without assignment
*/
let count = 10;
count = 15;
console.log(count);

console.log(myName);

// const 
/* 
- it is  block scoped
- it does not support reassignment
- it does not support redeclaration
- it does not allow declaring a variable without assignment
*/

//* scoping
// Var has a function scope
// let and const have a block scope

// variable can be global or local.
// local - funtion or block
// A block is anything inside a curly brace { } 

let username = "John Doe";
var isUserLoggedIn = true;

{
 console.log(userName);
 const person = "John Williams";  
 console.log(person); 

 var isSchoolOpen = false;
}

//Number
const count = 60;
console.log(typeof count);

//Boolean
const isLoggedIn = true;
console.log(typeof isLoggedIn);

//Null 
let person = null;



// undefined
let countValue;
console.log(countValue);

//BigInit
const amount 

//non primitive data types
//mutable
const person = {
    firstName: "John",
    lastName: "Peters",
    age:45
}

username.firstName = "Andrew";
username.age = 25;

console.log(user);

const newPerson = {name: "John Doe"};

//Arrays
const stringArray = ["John", 25, {name: "Maxwell"}, 6];
console.log(stringArray);