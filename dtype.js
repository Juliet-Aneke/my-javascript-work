//string data type
let name = "Alex";
console.log(typeof name);
console.log(name);


let a1 = "Hello";
let a2 = `can you say ${a1}`;
console.log(a2);

//Number
let number = 2;
console.log(typeof number);
console.log(number);

//boolean
let isLoggedIn = true;
console.log(isLoggedIn);

let num = true;
console.log(2 > 5);

//Null
let emptyValue = null;
console.log(emptyValue);

//undefined
let countValue;
console.log(countValue);

//bigint
let massiveNumber = 6982422222222222n;
console.log(massiveNumber);

//Non primitive
//object
let person = {
    firstName: "Sammuel",
    lastName: "Okeke",
    age: 30
}
console.log(person);
console.log(person.age);
console.log(person.lastName);

//Array
const mixedArray = [42, "text", {name:"object"}, [3,2,1]] ;
console.log(mixedArray);
console.log(mixedArray[2]);

//
let num1 = 20;
let num2 = 15;
let sum = num1 + num2;
console.log(num1);
console.log(num2);
console.log(sum);
let sumModulus = (sum % 2 === 0)? "even" : "odd";
console.log(sumModulus);

// Loops
for  (let i = 1; i <= 10; i++)
    {console.log(`${i}  Onyi`)

    }

for (let i = 2; i <=3; i++) {
    console.log(`${i} God is love`);
}

for  (let i = 5; i >= 1; i--)
    {console.log(i);

    }

for  (let i = 2; i <= 10; i++){
    if (i % 2=== 0)
    {console.log(i);

    }
}


// another method of even numbers
for (let i = 2; i <= 20; i+= 2) {

    console.log(i);
}

for (let b = 1; b <=20; b++) {
    if (b % 2 === 0){
        console.log(b);
    }
}


const getStringLength = (happy) => happy.length;
 console.log(getStringLength("happy"));


