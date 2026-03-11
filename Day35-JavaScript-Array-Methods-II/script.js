// Rest operator
function user(name, role, primarySkill, ...skills){
    console.log(name + " " + role + " " + primarySkill + " " + skills);
    console.log(skills);
}
user('Narasimhan', 'Mentor', 'Web technology', 'Prompt Eng', 'Web Design');

function generateBill(name, mobile, ...products){
    console.log(name);
    console.log(mobile);
    console.log(products);

}
generateBill('Narasimhan', '1234', 'milk', 'bread', 'chocolate', 'fruits');
generateBill('Someone', '123456', 'milk', 'groceries');

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log([...arr1, ...arr2, 7, 8, 9]);

// map() method
const usd = [10, 25, 50];
const inr = usd.map(usdAmount => usdAmount * 50);
console.log(inr);
// Task: Add GST amount to each price

// Filter() method
const foods = [
    {id: 1, name: "Mushroom fry", price: 250, veg: true},
    {id: 2, name: "Chicken fry", price: 350, veg: false},
    {id: 3, name: "French Fries", price: 150, veg: true},
];

// price based filter
const priceFilter = foods.filter(food => food.price < 300);
console.log(priceFilter);

// filter for veg foods
const vegFilter = foods.filter(food => food.veg === false);
console.log(vegFilter);

// name based filter
const nameFilter = foods.filter(food => food.name === "French Fries");
console.log(nameFilter);

// reduce() method
// special method -> because it can carries 2 parameter variables
// cart logic = [250, 350, 30, 50];
// total = 680
const cart = [250, 350, 30, 50];
const totalPrice = cart.reduce((currentValue, nextValue) => {
    return currentValue + nextValue;
});
console.log(totalPrice);

// Sum of all numbers - Algorithm
// [10, 20, 30] - 60
// [5, 15, 25] - 45

// 105
const num1 = [10, 20, 30];
const num2 = [5, 15, 25];

const totalValues = [...num1, ...num2].reduce((a, b) => {
    return a + b;
});

console.log(totalValues);