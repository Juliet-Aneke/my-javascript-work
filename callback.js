


//examples of callback function

function calculateTotal(price,taxRate) {
    return price + (price * taxRate);
}


function processOrder(cb, itemName, price) {
    const totalAmountPaid = cb(price, 0.1);

    console.log("Receipt of payment");
    console.log(`item: ${itemName}`);
    console.log(`Total price: ${totalAmountPaid}`);
}

processOrder(calculateTotal, "laptop", 980000);


function getDiscountPrice(price, discountRate){
    return price - (price* discountRate);
}

function handleOrder(cb, price, discountRate, itemName) {
    const totalAmount = cb(price, discountRate);
    console.log("Black friday sales");
    console.log(`Discount amount: ${totalAmount}`);
    console.log(`item: ${itemName}`);
}

handleOrder(getDiscountPrice, 45000, 0.3, "55 inch smart TV");


function sumTwoNumbers (num1, num2){
    return num1 + num2;
}

function subtractTwoNumbers(num1, num2){
    return num1 - num2;
}

function getResult(cb, num1, num2){
    const result = cb(num1, num2);
    console.log(result);
}

getResult (sumTwoNumbers, 50,70)
getResult (subtractTwoNumbers,90, 30);

//
function sayHi() {
    console.log("Hi!");
}

function welcome(cb) {
    console.log("Welcome to Enugu.");
    cb(); 
}

welcome(sayHi);