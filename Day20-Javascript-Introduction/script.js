// Variable Creation
var learnerName = "Narasimhan";
console.log(learnerName);

let orgName = "Entri";
console.log(orgName);

const courseYear = 2026;
console.log(courseYear);

// Natures of Variable Keywords

// var - global scope variable
var deposit = 5000;
var deposit = 15000;
console.log(deposit);

// Block scope variable
let atmPin = 1234;
let accountBalance = 500;
atmPin = 1235;
atmPin = 2323;
console.log(atmPin);
console.log(accountBalance);

// const variables value cannot be changed - FIXED
const nationality = "Indian";
// const nationality = "American";
// nationality = "American";
console.log(nationality);

// * Hoisting only supports the var keyword
// Flag Hoisting
console.log(tax); // undefined
var tax = 18;

console.log(mobile); // reference error
let mobile = "Samsung";

console.log(laptop); // reference error
const laptop = "Apple Mac";