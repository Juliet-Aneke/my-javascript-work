const age =20;
const firstName = "Andrew"
const message = `${firstName} is ${age} years old.`;
console.log(message);

//string concatenation

console.log("Hello " + "world"); 
console.log("Hello" + " " + "world");


{
    const intro = "I am a fast growing software engineer";
    const firstName = "John";
    const message = "I am" + " " +firstName + ". " + intro + " I am " + age + " years old";
    console.log(message);
}

//example of string interpolation
{
    const intro = "I am a fast growing software engineer.";
    const firstName = "John";
    const age =30;
    const message = `I am ${firstName}. ${intro} I am ${age} years old. `
    console.log(message);
}


console.log(`
    I am strong.
    I am Great.
    `);

console.log("I am Great\nI am strong\nI am excellent");

