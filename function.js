// defining a function
function sayHello() {
    console.log("Hello World");
}
sayHello();
sayHello();
sayHello();

/* 
funtion declaration
Anonymous
Arrow function
*/

//function declaration or Named function
greet();
function greet() {
    console.log("Goodevening Prof");
}



console.log(myName);
var myName = "John doe";


/* 
========== Class Activity =================

Write a function called getEvenNumbers that prints even numbers between 1 to 20, each on a new line.

*/
function getvenNumbers () {
    for (let i = 0; i <=20; i++) {
    console.log(i);
}

}
function getEvenNumbers(){
    for (let i=1; i<=20; i++)
        if(i%2 ===0)
    { console.log(i)}
    
    }

getEvenNumbers();

//function with return keywords
// 1
function returnString() {
    return "My String";
}

const fnResult = returnString();
console.log(fnResult);

// 2
function addTwoNumbers() {
    const num1 = 10;
    const num2 = 15;
    return num1 + num2;
}
function displayResult() {
    const result = addTwoNumbers();
    console.log(result);
}

displayResult();

// 3 function doing calculation and returns value
function doExponent () {
    const base = 9;
    const power = 2;
    return Math.pow(base, power);
}
const displayExponentResult = `The result of the exponent is ${doExponent()}`;
console.log(displayExponentResult);

//funtions with parameters
function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(sumTwoNumbers(2, 3));
console.log(sumTwoNumbers(99, 11));
console.log(sumTwoNumbers(50, 28));

function calculateAreaOfRectangle(length, breadth) {
return length * breadth;
}
const areaOfRectangle = calculateAreaOfRectangle(10, 7);
console.log(areaOfRectangle);

/* 
=========== Class Activity ==============

Create a function called calculateTotal that accepts three numbers as parameters representing the prices of three items.

The function should:

- Calculate the total price.
- Display the total.
- Use a ternary operator to display:
	- "Eligible for Free Delivery" if the total is ₦10,000 or more.
	- "Delivery Fee Applies" otherwise.

*/
function calculateTotal (a,b,c) {
    const myTotal = a + b + c;

    const totals= `Total price is ${myTotal}`;
    console.log(totals);
    const printFreeDelivery = 
    eligible >= "N10,000" ? "eligible for free delivery": "Delivery fee applies";

}

calculateTotal(3000, 2500, 5000);


function calculateTotal(item1, item2, item3){
    const total = item1 + item2 + item3;

    console.log("Total price: N" + total);

    const deliveryStatus = total >= 10000
        ? "Eligible for Free Delivery"
        : "Delivery Fee Applies";

        console.log(deliveryStatus);
}

calculateTotal (3000, 2500, 5000)



function calculateKelvinTemp(tempInCelsius){
    return 273 +tempInCelsius;

}

const tempInKelvin = calculateKelvinTemp(23);
console.log(`${tempInKelvin}k`);


// function expressions (anonymous functions)
const calculateKelvinsTemp = function(tempInCelsius) {
    console.log( 273 + tempInCelsius);
}

calculateKelvinsTemp(35);

const subtractTwoNumbers = function(x,y){
    console.log(x - y);
    return x - y;
}
subtractTwoNumbers(78,45);



const person = {
    name: "John",
    age: 22,
    getBirthYear: function(){
        return new Date().getFullYear() - this.age;
    }
}
console.log(person.getBirthYear());

/* ========== Class Activity ============

Write a function called calculateBMI that takes weight (in kg) and height (in meters) and prints the BMI. Formula: BMI = weight / (height × height)
*/


const calculateBmi = function(weight,height){
return weight / (height ** 2);

}
console.log(calculateBmi(90, 1.7));

/*
//Arrow functions

const addTwoNumbers = () =>  {
}

const addTwoNumbersWithParams = (a,b) =>  {

}
    */

// implicit arrow functions
{
const addTwoNumbers = (num1, num2) => num1 +num2;
console.log(addTwoNumbers(10,9));

const greetUser = (name) => console.log(`Hello ${name}`);
greetUser("John");


}


const calculateBms = (weight,height) =>
weight / (height ** 2);
console.log(calculateBms(90, 1.7));


/* ========= Class Activity =================
Write a function called getStringLength that takes a string and prints its length.

*/




const getStringLengths = (string) => string.length;

console.log(getStringLengths("God"));


const getStringLength = (string) => string.length

console.log(getStringLength("Onyinye"));

const getStringLenght = (string) => string.length
console.log(getStringLength("Juliet"));

//Explicit arrow functions


    const fizzBuzz = (number) => {
        if ((number % 3 === 0) && (number % 5 === 0)){
            return "Fizzbuzz";
        } else if (number % 3 === 0){
                return "Fizz";
        } else if (number % 5 === 0) { 
            return "Buzz";
        }else {
            return number;
        }
        }
const fizzBuzzResult = fizzBuzz(45);
console.log (fizzBuzzResult);


 /* 
============ Class Activity ============
Create a function called rectanglePerimeter that takes length and width as parameters and prints the perimeter. Formula: Perimeter = 2 × (length + width)

*/

const rectanglePerimeter = (l,w) => 2* (l + w)
console.log(rectanglePerimeter(15,6));


 // another method 

 
const rectanglePerimeters = (length, width) => 2 * (length + width);
console.log(rectanglePerimeters(45,12));

// Explicit
const rectanglePerimeter2 = (l,w) =>{
  return 2 * (l + w)
}

console.log(rectanglePerimeter2(3, 4));







