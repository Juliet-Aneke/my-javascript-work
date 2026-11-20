const myName = "John Doe";
// console.log(myName);

function doSomething() {
    const occupation = "Software Engineer";
    console.log(myName);
    console.log(occupation);
    
}
 
doSomething();

/* 
local scope 
    - function scope
    - block scope
*/

// Block scope
let age = 12;
if (age >= 18) {
    console.log("You can vote");
    // console.log(message);
} else {
    console.log("you cannot vote");
}

// console.log(message);


//  var, let, const
// var is function scoped
// let and const have block scope

function double() {
    const num = 10;
    console.log(num * 2);
} 
double();

//Hoisting with var
console.log(userName);
var userName = "Maxwell";

//Hoisting with let and const
let role = "DevOps";
console.log(role);



//Hoisting with function declaration
{
    sayHello()
    function sayHello(){
        console.log("Hello World..");
    }
}


//hoising with function expression and arrow function

{
    sayHello();
     sayHello = function() {
        console.log("Hello world");
    }
}