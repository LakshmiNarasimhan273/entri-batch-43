const apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl).then(response => { // checking and conversion
    // response parameter take the data from fetch and pass inside this function
    if(!response){
        throw new Error("Data Fetching Failed");
    }

    return response.json();
}).then(data => { // processor
    console.log("Product API",data);
}).catch(error => {
    console.log(error);
})

const userApi = "https://jsonplaceholder.typicode.com/users";

fetch(userApi).then(response => { // checking and conversion
    // response parameter take the data from fetch and pass inside this function
    if(!response){
        throw new Error("Data Fetching Failed");
    }

    return response.json();
}).then(data => { // processor
    console.log("User API", data);
}).catch(error => {
    console.log(error);
})

const receipeApi = "https://dummyjson.com/recipes";

fetch(receipeApi).then(response => { // checking and conversion
    // response parameter take the data from fetch and pass inside this function
    if(!response){
        throw new Error("Data Fetching Failed");
    }

    return response.json();
}).then(data => { // processor
    console.log("Receipe API", data);
}).catch(error => {
    console.log(error);
})