/* synchronous nature
console.log(1);

setTimeout(() => {
     console.log(2);
}, 5000);

console.log(3);*/

const productContainer = document.getElementById("product-container");

// async function
async function getProducts(){
    // then catch
    // try catch
    try{

        const response = await fetch("https://fakestoreapi.com/products");

        if(!response){
            throw new Error("Data fetching failed");
        }

        const products = await response.json();
        /*
        [
        {id: 1},
        {id: 2},
        {id: 3}
        ]
        */

        // data = {id: 1, image: "", title: "Backback"};

        products.forEach(data => {
            const card = `
            <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
            <img src="${data.image}" class="card-img-top" />
            <div class="card-body">
            <h6 class="card-title text-dark fw-bold text-truncate">${data.title}</h6>
            <p class="fw-bold text-primary">${data.price}</p>
            </div>
            </div>
            </div>
            `;
            productContainer.innerHTML += card;
        })

    }catch(err){
        console.log(err);
    }
}

getProducts();