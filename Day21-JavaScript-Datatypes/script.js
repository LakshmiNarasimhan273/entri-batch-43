// Primitive Types

let userName = "Narasimhan";
console.log(typeof userName); // string

let age = 20;
age = 26;
console.log(typeof age); // number

let isMentor = true;
console.log(typeof isMentor); // boolean

let salary = undefined;
console.log(typeof salary); // undefined

let bigInt = 1239761357163251235n;
console.log(typeof bigInt); // bigint ( big integer)

// Real-time Example

let email = "narasimhan123@mail.com";
console.log(typeof email);

let mobilenumber = 7010036699;
console.log(typeof mobilenumber);

let userLogged = true;
console.log(typeof userLogged);

let paymentStatus;
console.log(typeof paymentStatus);

// Reference Data Types
// object, array, function

// array
// let skills = "HTML, CSS, Bootstrap, JavaScript";
let skills = ["HTML", "CSS", "Bootstrap", "JavaScript", 25];
console.log(skills[2]);
console.log(Array.isArray(skills));

// function
function welcome(){
    console.log("Hey User You're Logged in");
    console.log("You can access your courses");
}
welcome();

let userProfile = {
    username: "Lakshmi Narasimhan",
    accountNumber: 7131834123,
    branch: "Tamil nadu",
    country: "India",
    accountActive: true,
    accountBalance: undefined,
    accountType: ['Salary Account', 'Personal Account']
};

let updateAccount = userProfile;
updateAccount.branch = "Kumbakonam";

// console.log(typeof userProfile);
console.log(userProfile.accountNumber);
console.log(userProfile);