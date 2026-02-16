// function

// Traditional Functions
function welcome(name){
    console.log(name);
};

welcome("Narasimhan");

// Arrow Function =>
const greet = (course) => {
    console.log(course);
};
greet("MERN");

// const learners = (name) => {
//     return name;
// };

// console.log(learners("Narasimhan"));

const learners = name => name;
// learners -> function name
// name (left side) -> prameter variable
// name (right side) -> return statement

console.log(learners("Someone"));

// callbacks
function paymentRequest(amount){
    console.log(`Payment of ${amount} sent successfully`);
};

function bankServer(callback){
    const money = 500;
    callback(money);
};

bankServer(paymentRequest);

// let a = 5;
// let b = 5;

// function add(num1, num2){
//     return num1 + num2;
// };

// add(a, b);

// real-time scenario for callbacks
function upiApp(balance, upiPin){
    let enteredPin = 2222;
    let enteredAmount = 5500;
    if(upiPin === enteredPin && enteredAmount <= balance){
        console.log(enteredAmount, "Payment Successful");
    } else {
        console.log("Invalid Transaction");
    }
}

function serverBank(callback){
    let upiPin = 2222;
    let balance = 5000;
    callback(balance, upiPin);
}

serverBank(upiApp);

// Real time Notification system
// Function Currying
const sendNotification = (type) => {
    return (message) => {
        if(type === "email"){
            return `Email Sent: ${message}`;
        } else if (type === "number"){
            return `OTP Sent to your Mobile Number: ${message}`;
        }else{
            return `Invalid Option`;
        }
    }
};

console.log(sendNotification("email")("Click this link for Change your password"));
console.log(sendNotification("number")("Your OTP - 2387, Don't share with anyone"));