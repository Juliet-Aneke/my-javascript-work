//Array destructuring
const fruits = ["banana", "mango", "watrmelon", "orange", "guava"];
// const [firstFruit, secondFruit] = fruits;
const [firstFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(thirdFruit);


//array destructuring wit rest operator

const colors = ["red", "blue", "gold", "yellow", "black"];
const [ firstCol, secondCol, ...restColors] = colors;
console.log(firstCol);
console.log(secondCol);
console.log(restColors);

// object destructuring
const person = {
    name: "John Doe",
    age: 20,
    occupation: "Data analyst",
    location: {
        streetNumber: 10,
        streetName: "obiagu street",
        city: "Enugu",
        state: "Enugu State"
    }

}
const {name, age, occupation, location: { streetNumber, state, city}}= person;
console.log(name);
console.log(age);
console.log(occupation);
//console.log(location);
console.log(streetNumber);
console.log(state);
console.log(city);


{
/*const worker = {
    name: "Maxwell",
    age: 25,
    role: "Developer"
}
const {name: workerName, age: workerAge, role, location: {state}} = worker;
console.log(name);
console.log(age);
console.log(role);

*/
}

const product = {
    name: "laptop",
    price: 1200,
    quantity: 1
}

const { name: productName, ...otherproductDetails} = product;
console.log(productName);
console.log(otherproductDetails);

const student = {
    studentName: "Alice",
    age: 21,
    course: "computer science",
    hobbies: ["reading", "singing", "coding"]
}
/*const {studentName, hobbies} = student;
console.log(studentName);
console.log(hobbies) */

const {studentName, hobbies:  {firstHobby, ...otherHobbies}} = student;
console.log(studentName);
console.log(firstHobby);
console.log(otherHobbies);

function displayobjectsprops(object) {
    console.log(object.studentName);
    console.log(object.age);
    console.log(object.course)
}
displayobjectsprops(student);