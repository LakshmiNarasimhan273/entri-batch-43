// Arithmetic operator
let a = 0;
let b = 10;
console.log(a + b); // Addition operator
console.log(a - b); // Subtraction operator
console.log(a * b); // Multipilcation operator
console.log(b / a); // Divison operator

// Assignment operator
const name = "Narasimhan";
// pre-increment | post-increment
let num = 10;
num += 18; // pre-increment
console.log(num);

let age = 13;
age =+ 18; // post-increment
console.log(age);

// Comparison Operator
let eligibleAge = 18;
let userAge = "18";
console.log(userAge > 18); // greater than | greater than or equal to
console.log(userAge <= 50); // lesser than | lesser than or equal to

// == | ===
// == (double equal to checks the value)
// === (triple equal to checks the value and data-type)

console.log(eligibleAge == userAge);
console.log(eligibleAge === userAge);

// Ternary operator
// ? -> true block : -> false block
let isAdmin = false;
isAdmin ? console.log("Welcome admin")
 : console.log("Welcome user");

let mark = 340;
mark >= 345 ? console.log("Pass") 
: console.log("Fail");

let password = "narasimhan@321";

password === "narasimhan@321" ? console.log("You're logged in")
: console.log("Invalid password");

// Expressions
let username = "Narasimhan";
console.log("You're successfully logged in " + username);
console.log("You're successfully logged in", username);

// backtricks (``)
// curly brackets {}
console.log(`You're successfully logged in ${username} welcome back`);

// Interview problem

console.log(5 + "5"); // 55
console.log(5 - "5"); // 0

console.log(5 - "entri"); // NaN - Not as Number

console.log(5 * "5");