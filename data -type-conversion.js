//implicit

//string coercion
console.log("55" + 89);
console.log("55" + null);


//numeric coercion
console.log("55"/5);
console.log("55" * 5);
console.log("55" % 5);
console.log(true - 5);
console.log(null - 5);
console.log([] - 5);


//boolean coercion
console.log("" || 55);


//explicit conversion
//Number conversion
//Number
let userAge = "75";
console.log(typeof userAge);

userAge = Number(userAge);
console.log(typeof userAge);

console.log(Number("70"));
console.log(Number("70.998"));
console.log(Number("70.998px"));

// 2.parsient ()
console.log(parseInt("34"));
console.log(parseInt("45.67"));
console.log(parseInt("45.67px"));

// 2.parseFloat ()
console.log(parseFloat("45.67"));
console.log(parseFloat("48.67rem"));

//string conversion
console.log(String(true));
console.log(String(35));

//toString()
console.log((57).toString());
let isLoggedIn = true;
console.log(isLoggedIn.toString());

//Boolean conversion
console.log(Boolean("true"));
console.log(Boolean(76 > 1000));

// 2, ||
console.log( !! " ");

//object conversion
//1. stringify
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    role: "senior backend dev"
};

 const personString = JSON.stringify(person);
 console.log(typeof personString);

 //2. parse
 const personObj = JSON.parse(personString);
 console.log(personObj);
 console.log(personObj.role);
console.log(9 + "88");