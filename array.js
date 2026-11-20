

//Array literals

const fruits = [ "banana", "mango", "orange"];
const numbers = [1, 2, 3, 4];


//using the array constructor
const users = new Array("John", "Doe", "Max", 5, {name:"John"});

console.table(fruits);
console.table(numbers);
console.table(users);


//Empty array
const string = [];

//Access element
console.log(fruits[2]);
console.log(users[4]);

//modify 
fruits[1] = "grape"
console.log(fruits);


//Lenght property of an array
const colors = [ "red", "green", "blue", "white","purple", "yellow", "pink", "indigo"]; 

console.log(colors.length);

// finding the indexof an item in an array
console.log(colors.indexOf("white"));

// Accessing the last element in an array
/* const lengthOfColorsArray = colors.length; */

console.log(colors[colors.length - 1]);

//Nested Arrays
const letters = [
["a", "b", "c"], 
["d", "e", "f"], 
["g", "h", ["i", "j", "k"] ]
];

console.log(letters[0][1]);
console.log(letters[2][2][1]);


//accessing sophi in the array

const students = [
    ["John", "Jane", "Mike"],

    ["David", "Sarah", "Peter"],

    [
        "Paul",
        "Grace",
        ["Daniel","Esther",["James",["Michael","Sophia","Robert"]]]
    ]
];

console.log(students[2][2][2][1][1]);

const color = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
        "Black",
        "White",
        "Gray",
        "Cyan"
    ];

 /*   function getAnyRandomColor (colorArray) {
        const randomColorIndex = Math.floor(Math.random() * colorArray.length); 
        return colorArray[randomColorIndex(color)];
    }

    console.log(getAnyRandomColor());



     const colorPicker = function (colorArray) {
        const randomNumber = Math.floor(Math.random() * 8);
        console.log(colorArray[randomNumber]);
    }

    colorPicker(colors);


    //
    const getRandomColors = (colors) => {
    let randomIndex = Math.floor(Math.random() * ((colors.length-1)+1));
    return colors[randomIndex];
}

console.log(getRandomColors(colors));
    */


    //Arrays and loops
 const hobbies = ["reading", "dancing", "coding", "traveling"];

 //using thr for loop
 for (let index = 0; index < hobbies.length; index++) {
    console.log(hobbies[index]);
 }

 // using the for of loop
for (const hobby of hobbies) {
    console.log(hobby);
}


//Array Method
const workers = ["John", "Andy", "emma", "andy"]

//Push method
workers.push("maxwell", "peter");
console.log(workers);

//pop method
workers.pop();
console.log(workers);

//unshift method
workers.unshift("miriam", "paschal");
console.log(workers);

//shift method
workers.shift();
console.log(workers);

//concate method
const roles = ['devOps', "frontend", "backend"];
const workersAndRoles = workers.concat(roles, [1, 2, 3, 4], "number");
console.log(workersAndRoles);


//join method
console.log(workers.join(", "));

//slice method
const cars = ["toyota", "benz", "lexus", "ford", "bmw", "chevrolet"];
console.log(cars.slice(2));
const carResult = cars.slice(4,5);
console.log(carResult);

/*
// splice method
//when it takes 1 argument
const remainingCars = cars.splice(3);
console.log(remainingCars);
console.log(cars);
*/

//when it takes 2 arguments
const reviewedCars = cars.splice(1, 3);
console.log(reviewedCars);
console.log(cars);

//when it takes 3 arguments
{
    const stringArray = ["a", "b", "c", "d", "e", "f"]

    const deletedStrings = stringArray.splice(2, 1, 1, 8,6);
    console.log(deletedStrings);
    console.log(stringArray);
}
