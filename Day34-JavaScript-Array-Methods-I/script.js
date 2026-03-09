// Array Methods

// push()
let watchlist = ["JavaScript Course", "React Introduction"];
watchlist.push("Backend Introduction", "Fullstack Project");
console.log(watchlist);

// pop()
watchlist.pop();
console.log(watchlist);
// watchlist.pop();
// console.log(watchlist);

// shift() 
let ticketLine = ["person1", "person2", "person3"];
ticketLine.shift();
console.log(ticketLine);

// unshift()
let medicalLine = ["general-person", "consultancy"];
// emergency-person
medicalLine.unshift("emergency-person");
console.log(medicalLine);

// slice()
let instagramTrends = ["AI", "Cricket", "Stocks", "Medical", "Politics", "Programming"];
// need to create a variable, because of shallow copy process
let filteredTrends = instagramTrends.slice(1, 2);
console.log(filteredTrends);

// original array does'nt affect
// console.log(instagramTrends);

// splice()
// adding/removing the dynamic function

// Mechanical keyboard
let cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// splice(indexValue, deleteCount, replacementWord)
cart.splice(2, 0, "Mechanical keyboard");
console.log(cart);

let users = ["user1", "user2", "user1", "user3"];
users.splice(2, 1);
console.log(users);

// String methods
// uppercase & lowercase

let emailInput = "NARASIMHAN@GMAIL.COM";
let cleanedMail = emailInput.toLowerCase();
console.log(cleanedMail);

let panCard = "abefr7654f";
let correctedPan = panCard.toUpperCase();
console.log(correctedPan);