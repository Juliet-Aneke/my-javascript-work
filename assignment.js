// Assignment operators

//Addition assignment operator

let countValue = 10;
countValue += 15;
console.log(countValue);



//subtraction assignment operator

countValue += 16;
console.log(countValue);

//division 
countValue /= 3;
console.log(countValue);

//multiplication 
countValue /= 19;
console.log(countValue);

// modulus assignment operator
countValue %=10;
console.log(countValue);

//Exponentiation 
countValue **2;
console.log(countValue);



//logical operator

//Not operator (!)
console.log(!true);
let truthyValue = Boolean(5);
console.log(truthyValue);

//1,2,33," ", true, [], {}evalauetes to true
// null, undefined, "", 0, evaluates to false.

//AND operator (&&)

console.log(true && false);
console.log((20 + 15) && (3 * 0));
console.log("" && (3 * 5));

//Or operator  (||)
console.log("" || (12 * 5));
console.log("" || (5*0));
console.log((5*0) || "No value Provided");

// Nullish coalescing (??)
console.log(null ?? "use this data when null");
console.log(undefined ?? "use this data when undefined");

//Examples
const a = 0;
const b = "Hello";
const c = null;

console.log


//comparison operators

//greater than
console.log('comparison operators');
console.log(10 > 15);

//less than (<)
console.log(15 < 100);

// greater than or equal to (>=)
console.log( 18 >= 10);


//less than or equal to (<=)
console.log(5 <= 2);

//equality operator (==)
console.log("Equality operator");
console.log(12 == "12");
console.log(12 == 90);
console.log("Hello" == "hello")

//strict equality operator (===)
console.log(" strict Equality operator");
console.log(12 === "12");
console.log(12 === 12);

//inequality operator (!=)
console.log(" inequality operator");
console.log(2 != 5);
console.log(2 != "2");

//strict inequality (!==)
console.log("strict inequality");
console.log(35 !== 40);
console.log(40 !== "40");