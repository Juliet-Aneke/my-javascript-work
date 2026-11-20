// rest in function parameters

function doSum(...nums) {
    const result = nums.reduce((acc, value) => acc + value, 0);
    return result;
} 
console.log(doSum(10, 15, 15, 20));

 function doMultiply(baseNumber, ...nums) {
    const result = nums.map(num => baseNumber * num);
    console.log(result);
 }
 doMultiply(5, 1, 2, 3, 4, 5);

 // rest operators with array destructuring
 const fruits = ["apple", "orange", "banana", "grape"];
 const [firstFruit, secondFruit, ...restOfFruits] = fruits;
 console.log(firstFruit);
 console.log(secondFruit);
 console.log(restOfFruits);

 {
    const staff = {
        name: "John Doe",
        age: 25,
        role: "Backend Engineer",
        sayRole() {
            return `${this.name} is working as a ${this.role}`
        }
    }
 // console.log(staff.sayRole())
const {name: staffName, sayRole, ...restOfStaffDetail} = staff;
console.log(staffName);
// console.log(sayRole());
console.log(restOfStaffDetail);


const doMaths = {
    sum(a, b) {
        return a + b;
    }
}

const {sum} = doMaths;
console.log(sum(2, 3));
 }
