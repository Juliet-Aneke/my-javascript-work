//spread operator
const numbers = [1, 2, 3, 4, 5];
const letters = ["a", "b", "c", "d", "e"];

// using spread to copy an array
const newNumbers = [...numbers, 6, 7];
console.log(newNumbers);

//for merging
const combinedArrayElements = [...numbers, ...letters];
console.log(combinedArrayElements);


//converting a string to array using the spread operator
const myName = "Max";
const lettersInMyName = [...myName];
console.log(lettersInMyName);

//spread with objects
const student = {
name: "Seth Mathew",
location: "vatican city",
occupation: "priest"
}

const course = {
    courseName: "psychology",
    regNo:  "PSY2355"
}

//copy
const copied = {...student};
console.log(copied);

//update 
const update = {...student, name: "John Doe"}
console.log(update);

//modify
const modifiedStudent = {...student, email: "seth@email.com"};
console.log(modifiedStudent);

//merging
const merged = {...student, ...course};
console.log(merged);

