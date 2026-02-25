// OTP Generator & Validator

document.addEventListener("DOMContentLoaded", () => {

    const generateBtn = document.getElementById("generateBtn");
    const validateBtn = document.getElementById("validateBtn");

    const otpInput = document.getElementById("otpInput");

    const message = document.getElementById("message");

    const successModal = new bootstrap.Modal(document.getElementById("successModal"));

    // change, submit, click, dblclick
    generateBtn.addEventListener("click", () => {
        // otp generation - 99,999
        const otp = Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem("generatedOtp", otp)

        message.innerHTML = 
        `<span class="alert alert-success">Generated OTP: ${otp}</span>`
    });

    // OTP Validation
    validateBtn.addEventListener("click", () => {
        const enteredOtp = otpInput.value;
        const storedOtp = localStorage.getItem("generatedOtp");

        // it checks the value is presented in our localstroage or not
        if(!storedOtp){
            message.innerHTML = 
            `<span class="alert alert-warning">No OTP Generated</span>`
            return;
        }

        // condition for checking the generated otp matches to the user entered otp
        if(enteredOtp === storedOtp){
            successModal.show();
            localStorage.clear();
            message.innerHTML = "";
            otpInput.value = "";
        }else{
            message.innerHTML = 
            `<span class="alert alert-danger">Invalid OTP</span>`
        }
    })


})