// Functions

// function - keyword
// functionName - function name
// () - parameter
// { - function body
// }
// functionName() - function callback with arguments

// Function Syntax
function welcome(){
    console.log("Welcome Learners");
}

welcome();

// Function with Conditions
function checkAge(){
    let age = 18;

    if(age >= 18){
        console.log("Eligible");
    } else {
        console.log("Not Eligible");
    }
}

checkAge();

// Function parameters and arguments
let a = 5;
let b = 10;

let c = 20;
let d = 25;

function add(num1, num2, num3, num4){
    console.log(num1 + num2 + num3 + num4);
}

add(a, b, c, d);

// return statement example

function greet(){
    return "Welcome Back Learner";
}

console.log(greet());

// Real-time Example for calculating student grade
function calculateGrade(studentName, studentMark){
    let grade;

    if(studentMark >= 90){
        grade = "A";
    } else if(studentMark >= 75){
        grade = "B";
    } else if(studentMark >= 50){
        grade = "C";
    } else {
        grade = "Fail";
    }

    // console.log(`Hi ${studentName} you got ${grade} grade`);
    return `Hi ${studentName} you got ${grade} grade`;

};

// calculateGrade("Narasimhan", 82);
console.log(calculateGrade("Narasimhan", 82));
console.log(calculateGrade("Someone", 94));

// Advance function pattern

// Nested functions
function parent(functionName){
    console.log("Parent Function Executed");
    console.log(functionName, "Function Executed");

    function child(){
        console.log("Child Function executed");
    };
    child();
};

parent("Parent");

// Most wanted interview problem
// Function Currying

// function multiply(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     };
// };
// console.log(multiply(5)(2)(3));

function authentication(username){
    return function(password){
        if(username === "admin@mail.com" && password === "admin@123"){
            console.log("Welcome Admin");
        }else{
            console.log("Invalid Credentials");
        }
    }
};

authentication("admin@mail.com")("admin@123");
authentication("admin@mail.com")("admin@234");