document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const alertBox = document.getElementById("alertBox");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation pattern
    // email pattern
    // narasimhan123@mail.in
    // narasimhan.dev@gmail.com
    // /^ - regEx starting place
    // $/ - regEx ending place
    const emailPattern = /^[a-zA-Z0-9._$%-]+@[a-z]+\.[a-z]{2,}$/;
    // password pattern - 1 uppercase, 1 lowercase, 1 number, 1 special character, 8 character
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?#]).{8,}$/;

    if(!emailPattern.test(email)){
        showAlert("Invalid email address. Example: user@mail.com");
        return;
    }

    if(!passwordPattern.test(password)){
        showAlert("Password must be 8+ character, includes uppercase, lowercase, number and special characters");
        return;
    }

    window.location.href="success.html";
})


function showAlert(message){
    alertBox.innerHTML = `
    <div class="alert alert-danger" role="alert">
    ${message}
    </div>
    `
}
});