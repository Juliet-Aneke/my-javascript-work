

// creating an object using the object literals
const worker = {
    name: "maxwell williams",
    age: 25
}
console.log(worker);



//using object constructor
const student = new Object();
student.name = "john Doe"; 
console.log(student);


//defining an empty object
const person ={};
console.log(person);

//guidelines for defining object 


//Accessing property of  an objects
{
    const person = {
        name: "John",
        Age: 20,
        role: "Backend engineer",
        stateOfOrigin: "Enugu",
        "place of birth": "Lagos"
    }

    console.log(person.stateOfOrigin);
    console.log(person["place of birth"]);
    console.log(person["name"]);
   
}

// modify object
{
 const person = {
        name: "",
        Age: 20,
        role: "Backend engineer",
        stateOfOrigin: "Enugu",
        "place of birth": "Lagos"
    }   

    person.role = "frontend engineer";
    person["place of birth"] = "london";
    console.log(person);

    //adding new property to an object
    person.location = "Lagos, Nigeria"
    console.log(person);

    //delete an object
    delete person["place of birth"];
    console.log(person);
}


//nested object


const user = {
    name: "",
    Age: 20,
    role: "Backend engineer",
    stateOfOrigin: "Enugu",
    "place of birth": "Lagos",

    address: {
        streetNumber:10,
        streetName: "Azikiwe",
        city: "ogui",
        LGA: "Enugu North",
        State: "Enugu",
        country:"Nigeria"
            
    },

    cars: {
        color: "blue",
        model: "bmw",
        year: 2006,


        producer: {
            firstName: "Aneke",
            secondName: "David"
        }
    }
    
}   
console.log(user.cars.producer.firstName);



//Create an object representing a book (title, author, pages, isRead

const book = {
        title: "God is love",
        author: "Elizabeth",
        year: 1925,
        pages: 218,
        isRead: true,
    };
    console.log(book.title);


    //object methods
    const counter = {
        countValue: 5,
        increaseCount: function() {
            return this.countValue += 1
        }, 
        getCountValue() {
            console.log(this.countValue);
        }
    }
    console.log(counter.countValue);
    counter.increaseCount();
    counter.getCountValue();


    // using banking
    const bankAccount = {
        accountBalance: 5000,
        makeDeposit: function(amount){
            return this.accountBalance += amount;
        },
        withdrawal(amount) {
            if (amount > this.accountBalance) {
                console,log("insufficient funds");
                return;
            }
             this.accountBalance -= amount;
        },
        getAccountBalance() {
            return this.accountBalance;
        }
    }
    bankAccount.makeDeposit(5000);
    bankAccount.makeDeposit(3000);
    console.log(bankAccount.getAccountBalance());
    bankAccount.withdrawal(400);
    console.log(bankAccount.getAccountBalance());
    bankAccount.withdrawal(600);
    console.log(bankAccount.getAccountBalance());



    /* 
Create a JavaScript object called shoppingCart that represents a customer's shopping cart.

The object should have a cartItems property, which is an array containing the items in the cart. Each item should be represented as an object with a name, price, and quantity.

Your shoppingCart object should have the following methods:

1. addItem(name, price, quantity)
Adds a new item to the cart.
Example: shoppingCart.addItem("Keyboard", 25000, 2);

2. calculateTotal()
Calculates and returns the total cost of all items in the cart.

3. displayCart()
Displays each item in the cart along with its name, price, and quantity.

4. checkout()
Checks if the cart is empty.
If the cart is empty, display "Your cart is empty".
Otherwise, display the total amount to be paid and clear the cart.

5. getCartItems()
Returns the current items in the cart.

6. clearCart()
Removes all items from the cart.
It sets cartItems back to an empty array.

*/

/* 
this.cartItems.push({name, price, quantity});
this.cartItems.push({
    name: "Klin Detergent", 
    price: 400, 
    quantity: 10
});

*/

const shoppingCart = {
    cartItems: [],
    total: 0,
    addItem(name, price, quantity) {
        this.cartItems.push({name, price, quantity});
    },
    calculateTotal() {
        let totalItemAmount = 0;
        for (const item of this.cartItems) {
            totalItemAmount = totalItemAmount + (item.price * item.quantity);
        }
        this.total = totalItemAmount
        return totalItemAmount;
    },
    displayCart() {
        for (const item of this.cartItems) {
            console.log(`Item Name: ${item.name}`);
            console.log(`Price: ${item.price}`);
            console.log(`Quantity: ${item.quantity}`);
            console.log("-------------------------");
        }
    },
    checkout() {
        if (this.cartItems.length === 0) {
            console.log("Your cart is empty");
            return;
        }

        console.log(`The total amount to be paid is ${this.total}`);
        this.clearCart();
    },
    getCartItems() {
        return this.cartItems;
    },
    clearCart() {
        this.cartItems = [];
    }
}

shoppingCart.addItem("Detergent", 500, 10);
shoppingCart.addItem("Phone stand", 5500, 1);
shoppingCart.addItem("Screen protector", 3500, 2);
console.log(shoppingCart.getCartItems());
console.log(shoppingCart.displayCart());
shoppingCart.calculateTotal();
console.log(shoppingCart.total);
shoppingCart.checkout();
console.log(shoppingCart.getCartItems());
    
