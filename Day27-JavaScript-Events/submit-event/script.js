document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("paymentForm");

    const username = document.getElementById("username");
    const cardNumber = document.getElementById("cardnumber");
    const cvvNumber = document.getElementById("cvvnumber");

    const error = document.getElementById("error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if(username.value === "" || cardNumber.value === "" || cvvNumber.value === ""){
            error.innerText = "All the fields are required";
        }else{
            error.innerText = "";
            // BOM
            alert("Payment Successfully completed");
        }
    })

})