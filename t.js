const users = [
  { id: 1, firstName: "Jane", lastName: "Doe", isActive: true },
  { id: 2, firstName: "Mark", lastName: "Smith", isActive: false },
  { id: 3, firstName: "Sarah", lastName: "Johnson", isActive: true }
];

const modifiedUser = users.map((user) => {
        
    return {
        id: user.id, 
        fullName: `${user.firstName} ${user.lastName}`,
        IsActive: `${user.isActive ? "Active User": "Inactive User"}`

    }
});
console.log(modifiedUser);

/*
{
    let userAge =Number(prompt("Enter your Age:"));
    let nextYearAge = userAge + 1;
    alert("Next year you will be " + nextYearAge);

}
*/


{
    let firstName = "Christopher";
    firstName = firstName.trim().toLowerCase();
    let favouriteNumber = 5;
     if (firstName.length > 8) {
        firstName = firstName.slice(0,8)}
    let userName = `${firstName}${favouriteNumber}`
    console.log(userName);

}

{
    const products = [
        {
            name: "Laptop",
            price: 500000,
            category: "Electronics"
        },
        {
            name: "Office Chair",
            price: 85000,
            category: "Furniture"
        },
        {
            name: "Backpack",
            price: 25000,
            category: "Accessories"
        },
        {
            name: "Headphones",
            price: 45000,
            category: "Electronics"
        }
    ];

    const totalProductCost = products.reduce((acc, products)=> {
        return acc + products.price}, 0);
        console.log(totalProductCost);
    

}    