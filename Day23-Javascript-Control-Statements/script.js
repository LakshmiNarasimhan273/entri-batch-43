// Conditional Statement

// if else
let age = 17;

if(age >= 18){
    console.log("You're eligible to vote");
    console.log("Please collect your voter id proof");
} else {
    console.log("You are not eligible to vote");
}

let marks = 30;

if(marks >= 90){
    console.log("Grade A");
} 

else if(marks >= 70){
    console.log("Grade B");
} 

else if(marks >= 50){
    console.log("Grade C");
} 

else {
    console.log("Fail");
}

// Interview Scenario (product companies interview question)
// optimized code
// nested conditions

let score = 43;

if(score >= 50){
    // grade checking
    if(score >= 90){
        console.log("Grade A");
    } else if(score >= 75){
        console.log("Grade B");
    } else {
        console.log("Grade C");
    }

} else{
    console.log("Fail");
}

// switch case
let day = 7; // monday

switch(day){
    case 1:
        console.log("Sunday");
        break;
    
    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}

// Looping Statement

// for loop

// 1) initial value
// 2) conditions
// 3) iteration


for(let i = 0; i < 5; i++){
    console.log(i);
}

// while loop
let j = 1; // initial value

while(j <= 5){ // condition
    console.log(j);
    j++; // iteration
}

// Do-While loop

let k = 1;

do{
    console.log(k);
    k++;
}while(k <= 10);

// Industry scenario
// User Authentication - Login validation

let username = "narasimhan";
let password = "narasimhan@321";

let enteredUsername = "narasimha";
let enteredPassword = "narasimhan@321";

// Logical Operator (AND)

if(enteredUsername === username && enteredPassword === password){
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}