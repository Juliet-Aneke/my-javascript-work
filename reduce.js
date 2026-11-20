// reduce method

// syntax: array.reduce(callback function, initial value)
// it return a single value
// it dosen't odify original array

{
    const prices = [1000, 3500, 7000, 1500];
    const totalPrices = prices.reduce((acc, price ) => acc + price, 0);
    console.log(totalPrices);

    //what is accumulated value?
    // 0 + 1000 =1000
    // 1000 + 3500 = 4500
    // 4500 + 7000 = 11500
    // 11500+ 1500 = 13000

}


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

const totalProductCost = products.reduce((acc, product) => {
    return acc + product.price}, 0);
    console.log(totalProductCost);


{

    const products = [
    {
        name: "Laptop",
        price: 500000,
        category: "Electronics",
        quantity: 2
    },
    {
        name: "Office Chair",
        price: 85000,
        category: "Furniture", 
        quantity: 5
    },


];


const totalPrice = products.reduce((acc, product) => { 
    return acc + (product.price * product.quantity);
}, 0);
console.log(totalPrice);

}


const sales = [
    {product: "laptop", quantity: 3, price: 25000},
    {product: "mouse", quantity: 10, price: 5000},
    {product: "keyboard", quantity: 5, price: 15000},
];
// using the return method, get the total sales amount.

{
    const products = [ "laptop - 500", "bag - 100", "phonestand - 50"];

    const items= products.map(product => {
        const splittedText = product.split(" - ");  // Example [laptop, 500]

        return {
            productName: `${splittedText[0]}`,
            price: `${splittedText[1]}`,
        }
    });
    console.log(items);
}
