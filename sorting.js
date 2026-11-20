
//reverse method
//modifies the original array

const letters = [ "a", "b", "c", "d", "e"];
letters.reverse();
console.log(letters);

//toreverse
//does'nt modify the original array

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.toReversed();
console.log(reversedNumbers);
console.log(numbers);

//sort method

//without parameter

const items = ["spoon", "umbrella", "spong", "apple", "scissors"];
const sortedItems = items.sort();
console.log(sortedItems);

//2
const prices = [1, 11, 10, 4, 19, 22, 2];
const sortedPrices = prices.sort();
console.log(sortedPrices);

//sorting with the compare functions  -----Ascending order
const chosenNumbers = [1, 11, 10, 4, 19, 22, 2];
const sortedChosenNumbers = chosenNumbers.sort((a,b) => a - b);
console.log(sortedChosenNumbers);


//Decending order

{
 //sorting with the compare functions
const chosenNumbers = [1, 11, 10, 4, 19, 22, 2];
const sortedChosenNumbers = chosenNumbers.sort((a,b) => b- a);
console.log(sortedChosenNumbers);
 
}





//The local compare
const names = ["Zoe", "Álvaro", "Alice", "Émile", "Bob"];
const sortedNames = names.sort((a, b) => a.localeCompare(b));
console.log(sortedNames);

// const stringNumbers = ["1", "10", "2", "20"];


// sorting by name
const products = [
 { name: "Laptop", quantity: 3, price: 250000 },
 { name: "Mouse", quantity: 10, price: 5000 },
 { name: "Keyboard", quantity: 5, price: 15000 }
];

const productsByName = products.sort((a, b) => (a.name).localeCompare(b.name));
console.log(productsByName);

//sorting by quantity
const productsByQuantity = products.sort((a, b) => a.quantity - b.quantity);
console.log(productsByQuantity);


//sorting by price
//ascnding order
{
const productsByPrice = products.sort((a, b) => a.price - b.price);
console.log(productsByPrice);
}


//descending order
{
const productsByPrice = products.sort((a, b) => b.price - a.price);
console.log(productsByPrice);
}


const students = [
  { name: "Sarah", score: 75, age: 21 },
  { name: "Michael", score: 90, age: 22 },
  { name: "John", score: 75, age: 20 },
  { name: "Grace", score: 90, age: 20 },
  { name: "Daniel", score: 85, age: 21 },
  { name: "Esther", score: 75, age: 22 }
];

const studentsNames = students.sort((a,b) => (a.name).localeCompare(b.name));
console.log(studentsNames);
// sorting by name

//const studentsByName = students.sort((a, b) => (a.name).localeCompare(b.name));
//console.log(studentsByName);


// sorting by score

{
const studentsScore = students.sort((a, b) => a.score - b.score);
console.log(studentsScore);
}


// sorting by score first, then name.
{
    const studentsSortResult = students.sort((a, b) => {

        //primary metric
        if (a.score !== b.score) {
            return a.score - b.score;
        }
        //secondary metric
        return (a.name).localeCompare(b.name);
    });
    console.log (studentsSortResult);
}
