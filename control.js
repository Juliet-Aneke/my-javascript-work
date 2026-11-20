console.log(1);
console.log(2);
console.log(3);

//if statements(only when its true)
//in comparison statements, we usually use comparison operators and logical operators
const userAge = 13;
if (userAge >= 18) {
    console.log("user can vote");
}
console.log("other codes continue to run...");


//if else statements
const value = 40;
if (value % 2===0){
    console.log(`${value} is even`);
} else{
    console.log(`${value} is odd`);
}


// Else if
const buttonType = "";

if (buttonType === "primary") {
    console.log("Use the primary button");
} else if (buttonType === "outline") {
    console.log("Use the outline button");
} else {
    console.log("Use the normal button");
}

//15 - 19
// 20 - 30 great score
//0 - 14 can do better
const studentScore = 10;

if (studentScore >=20 && studentScore <= 30){
    console.log("Great Score");
} else if (studentScore >=15 && studentScore <= 19) {
    console.log("Good score");
    
} else {
    console.log("can do better");
}


/*90 and above Grade A
A school grading system works like this:

90 and above → Grade A
70 to 89 → Grade B
50 to 69 → Grade C
Below 50 → Fail
*/

const studentGrade = 55;
if (studentGrade >=90){
    console.log("Grade A");
} else if (studentGrade >=70 && studentGrade <= 89){
    console.log("Grade B");
} else if (studentGrade >=50 && studentGrade <= 69){
    console.log("Grade C");
} else{
    console.log("Fail");
}



//switch statements
/*
0 - monday
1 - tuesday
2 - wednesday
3 - Thursday
4 - friday
5 - saturday
6-  sunday
*/



const day = 6;
if (day === 0)
{
    console.log("monday");
} 

else if (day === 1)
{
    console.log("tuesday");
} 

else if (day === 2)
{
    console.log("wednesday");
} 

else if (day === 3){
    console.log("thursday");

} 
else if (day === 4){
    console.log("friday");

} 

else if (day === 5){
    console.log("saturday");
} 

else {
    console.log("sunday");
}




// Switch statement
const days = 7;
switch(days) {
    case 0:
      console.log("Monday");
      break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("saturday");
        break;
    default:
        console.log("invalid day")
                 
}

/*Write a program that checks a user’s role using a switch statement.
The role can be "admin", "editor", "viewer", or any other value.
Print:
"Full access granted" for "admin"
"Limited edit access" for "editor"
"Read-only access" for "viewer"
"No access" for any other role
*/

const userRole = "editor";
switch (userRole) {
    case "admin":
        console.log("full access granted");
        break;
    case "editor":
        console.log("limited edit access");
        break;

    case "viewer":
        console.log("Read only access");
        break; 
    default:
        console.log("no access");

}

/* Create a program that takes a variable called signal.
If signal is "red", print "Stop"
If "yellow", print "Get ready"
If "green", print "Go"
For any other value, print "Invalid signal"
*/

const signal = "red";
switch (signal) {
    case "red":
        console.log("stop");
        break;

    case "yellow":
        console.log("ready");
        break;

    case "green":
        console.log("Go");
    default:
        console.log("invalid signal");

}

// the fall-through behaviour
// admins and editors ==> print "can Edith document"
// viewers => print "No edit access"
//"No access to document" for any other role 

const userAccess = "admin";

switch (userAccess) {
    case "admin":
    case "editor":
        console.log("can edit document");
      break;
    case "viewer":
        console.log("no edit access");
        break;
    default:
        console.log("no access to document");
}


const mark = 13;

//0 - 15  =======>  print "poor performance"
// 15 - 29 ------------fair performance
// 30 - 39 ---------good performance
//40 - 50 -----great performance
// otherwise print "Not a valid grade"

switch (true) {
    case mark >= 0 && mark <= 14:
        console.log("poor performance");
        break;
        
    case mark >= 15 && mark <= 29:
        console.log("fair performance");
        break;

    case mark >= 30 && mark <= 39:
        console.log("Good performance");
        break;

    case mark >= 40 && mark <= 50:
        console.log("great performance");
        break;

    default:
        console.log("not a valid grade");

}

//TENARY OPERATORS
const yearsOfExperience = 2;
const salary = yearsOfExperience > 2 ? "NGN800,000" : "NGN400,000 ";
console.log(salary);

let marks = 39;
let score = marks > 50 ? "pass": "Fail";
console.log(score);


//e.g 2
const trafficColor = "gray";
const printTrafficAction = 
trafficColor === "green" ? "Go" :
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

// switch continues

let choice = 3;
switch (choice){
    case 1:
        console.log("Biology")
        break;
    case 2:
      console.log("Physic")
        break;
    case 3:
      console.log("English")
      break;
    default:
     console.log("not available")
}




