
// for loop continues
const fruits = ["Guava", "mango", "Banana", "Pawpaw"];
console.log(fruits[4]);
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}

const strings = ["a", "b", "c"];
for (let index = 0; index < strings.length; index++) {
    console.log(strings[index]);
}

// for loop that counts from 1- 10
//initialisation; condition; increment
for (let nums = 1; nums <= 10; nums++) {
    console.log(nums);
}



// using while loop that counts from 1- 10

// 1- 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//code using the while loop that prints my name 5 times

let key = 1;
while (key <= 5) {
    console.log("Onyinye");
    key++;
}

let tryCount = 3;
let health = 3;
while (health >= 0) {
    console.log(`${tryCount}: User is alive`)
    tryCount--;
    health--;
}

if (tryCount === 0) {
       console.log("game over");
    }


let password = "";
let attempts = 1;
while (password !== "pass123" && attempts <= 3) {
    console.log(`Attempt: ${attempts}`);
    attempts++;
}

if (password ==="pass123") {
    console.log("Access is granted");

} else{
    console.log("too many attempts");
}


// do while loop
let number = 2;
do {
    console.log(" number is:" + number);
    number++
} while (number < 5);


let count = 0;
do {
    console.log("the current count is: " + count);
    count++;
}while (count <= 2);


let pasword;
do {
    pasword = "trava22";
    console.log(pasword);
} while (pasword !== "trava22");


let num = 1;
do {
    console.log(`current num value is: ${num}`);
    num++;

}while (num <=10);



//for of loop
const fruitsArray = ["grapes", "Mangos", "pears", "orange", "Banana"];
for (let fruit of fruitsArray) {
    console.log(fruit);
}


const names = [ "kelechi", "Andrew", "Joan"];
for (let name of names){
    console.log(name);
}

let age = 18;
if (age >= 18) {
    age++;
    console.log(age);
}
console.log(age);

//for in loop
/* 
for (let expression in object) {
    // code to be executed
    //objects are key value pairs
}
*/


const car = {
    make: "toyota",
    model: "venza",
    year: "2026"
}

for (const key in car) {
    console.log(key);
    
}


for (let b = 1; b <= 12; b++){
    console.log(`7 * ${b} = ${7 * b}`);

}
    


