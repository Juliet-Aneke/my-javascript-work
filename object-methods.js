
const person = {
    name: "John Doe",
    age: 55,
    role: "senior analysts"
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
//


const product = {
    name: "laptop",
    price: "N1200",
    brand: "Dell",
    model: "7521"
}

// syntax: for (const key in object)
for (const key in product) {
    //console.log(key);
   // console.log(product[key]);
   console.log(`${key}: ${product[key]}`);

}

Object.keys(product).forEach(key => console.log(`${key}: ${product[key]}`) 
);

for (const[key, entry] of Object.entries(product)) {
    console.log(key);
    console.log(entry);
}