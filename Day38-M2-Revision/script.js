// DOM & Events
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("message");

    btn.addEventListener("click", () => {
        const output = document.getElementById("result");
        // output.innerText = "Button Clicked";
        // output.textContent = "Button Clicked";
        output.innerHTML =
            `
        <h1>Button Clicked</h1>
        `
    });


    // Todo functionality
    const taskBtn = document.getElementById("addTask");

    taskBtn.addEventListener("click", () => {
        const input = document.getElementById("taskInput");
        const list = document.getElementById("taskList");

        if(input.value.trim() === "") return;

        const task = document.createElement("p");
        task.innerText = `${input.value}`;

        list.appendChild(task);

        input.value = "";

    })

});

// loop (for loop)
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// pattern problem - (right angle triangle (or) pyramid)
// *
// **
// ***
// ****
// *****

// nested loops
// first for loop - calculate the row count
for(let i = 1; i <= 5; i++) {
    let stars = "";

    // second loop to find the row number and the 
    // prints the star eventually
    for(let j = 1; j <= i; j++){
        stars += "*";
    };
    console.log(stars);
}

console.log("Nested pattern")

// pattern problem - (reverse triangle (or) pyramid)
for(let i = 5; i >= 1; i--) {
    let stars = "";

    // second loop to find the row number and the 
    // prints the star eventually
    for(let j = 1; j <= i; j++){
        stars += "*";
    };
    console.log(stars);
}

// let initialValue = 1;

// while(initialValue >= 5){
//     console.log(initialValue);
//     initialValue++;
// }

// API
fetch("https://fakestoreapi.com/products")
.then((response) => {
    // condition
    return response.json();
}).then((data) => {
    // console.log(data);
}).catch(err => {
    console.log(err);
});

// API with Async pattern
const container = document.getElementById("product-container");
async function getProducts(){
    try{

        const response = await fetch("https://fakestoreapi.com/products");
        // condition
        const products = await response.json();

        products.forEach(data => {
            console.log(data);
            // pre assignment (or) pre increment
            container.innerHTML += `
                <img src="${data.image}" width="80" height="80" />
                <h5>${data.title}</h5>
                <h6>${data.price}</h6>
                <p>${data.rating.rate}</p>
            `
        })

    }catch(err){
        console.log(err);
    }
}

// getProducts();

// array methods

// filter
const foods = [
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Italian",
    "price": 12.99,
    "rating": 4.8
  },
  {
    "id": 2,
    "name": "Classic Cheeseburger",
    "category": "American",
    "price": 8.99,
    "rating": 4.5
  },
  {
    "id": 3,
    "name": "Chicken Tikka Masala",
    "category": "Indian",
    "price": 14.50,
    "rating": 4.9
  },
  {
    "id": 4,
    "name": "Spicy Tuna Roll",
    "category": "Japanese",
    "price": 11.00,
    "rating": 4.6
  },
  {
    "id": 5,
    "name": "Caesar Salad",
    "category": "Appetizer",
    "price": 7.50,
    "rating": 4.2
  }
];

const priceFilter = foods.filter(data => {
    return data.price < 10;
});

console.log(priceFilter);

const foodCategory = foods.find(data => data.category === "Indian");
console.log(foodCategory);

// splice
let students = ['stu1', 'stu2', 'stu4', 'stu5'];
students.splice(2, 0, 'stu3');
console.log(students);

// local storage
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("saveBtn");

    btn.addEventListener("click", () => {
        const input = document.getElementById("nameInput");
        const value = input.value;

        const output = document.getElementById("username");

        localStorage.setItem("username", value);
        input.value = "";

        const username = localStorage.getItem("username");
        output.innerText = username;
    })
});

// Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();

        const emailPattern = /^[a-zA-Z0-9._$-]+@[a-z]+\.[a-z]{2,}$/;

        if(!emailPattern.test(email)){
            alert("Invalid email");
        }else{
            alert("Register successful");
        }
    })

})