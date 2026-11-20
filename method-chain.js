const students = [
{
    name: "John Doe",
    course: "software Enginerring",
    age: 22
},

{
    name: "JAlice May",
    course: "Data Enginerring",
    age: 25
},

{
    name: "Jane Seth",
    course: "software Enginerring",
    age: 27
},

];

// filter => age >= 22
// map => add year of birth

const finalResult = students
    .filter(student => student.age >= 22)
    .map(student => {
        const yearOfBirth = new Date().getFullYear() - student.age;
        return {
            name: student.name,
            course: student.course,
            age: student.age,
            yearOfBirth
        }
    });
    console.log(finalResult);

{
    const numbers = [ 1, 2, 3, 4, 5];
    const totalNumbersAfterTripping = numbers
        .map(number => number * 3)
        .reduce((acc, value) => acc + value, 0);

    console.log(totalNumbersAfterTripping);
}
