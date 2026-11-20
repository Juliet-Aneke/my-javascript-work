//TENARY OPERATORS
const yearsOfExperience = 2;
const salary = yearsOfExperience > 2 ? "NGN800,000" : "NGN400,000 ";
console.log(salary);

let marks = 39;
let score = marks > 50 ? "pass": "Fail";
console.log(score);


//e.g 2
const trafficColor = "gray";
const printTrafficAction = trafficColor === "green" ? "Go" :
                            trafficColor === "yellow" ? "Get Ready": 
                            trafficColor === "red" ? "stop" :"Not a valid traffic color";
console.log(printTrafficAction);

//e,g 3
/* 
============= Class Excercise ============

- Create two variables named num1 and num2 and assign them any numbers.
- Calculate the sum of the two numbers and store it in a variable called sum.

- Use a ternary operator to check if the sum is even or odd.

Display the following in the console:
- The value of num1
- The value of num2
- The sum
- Whether the sum is Even or Odd
*/


let num1 = 20;
let num2 = 33;
let sum = num1 + num2;
console.log(num1);
console.log(num2);
console.log(sum);
console.log(sum % 2);
console.log(sum % 2 === 0? "Even": "odd");

//Loops

//for loop
//Print your name 50 times

//initialisation, condition, increment
for (let count = 1; count <=50; count++) {
    //count++ means count = count + 1
    console.log(`${count}: Onyinye`);
}

for (let i = 0; i <=10; i++) {
    console.log(i);
}


for (let i = 70; i >=0; i--) {
    //i-- means i = i-1
    console.log(i);
}

for (let b = 1; b <=20; b++) {
    if (b % 2 === 0){
        console.log(b);
    }
}

/* Print the multiplication table of 7
Print numbers from 1 to 20.
Print numbers from 20 down to 1.
Print all even numbers between 1 and 50.
Print all odd numbers between 1 and 50.
Print your name 10 times.
Calculate the sum of numbers from 1 to 100.
Print the multiplication table of 7.
*/

// result for multiplication
//*Print the multiplication table of 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}




