//Generating Random number
/*

*/

console.log(2 * (7 + 6));

// 1 and 89 (89 is excluded)
// 0.99999999 and 88 = 87.99999 + 1 = 88.99999 = 88
{
    const maxNumber = 89;
    const minNumber = 1;
    const result = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    console.log(result);
}

{
    const maxNumber = 9999999;
    const minNumber = 1000000;
    const result = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    console.log("result:", result);
}

