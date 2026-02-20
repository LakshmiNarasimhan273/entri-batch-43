document.addEventListener("DOMContentLoaded", () => {
   
    const title = document.getElementById("message");
    const loginButton = document.getElementById("signin-btn");

    loginButton.addEventListener("click", function(){
        title.innerText = "Welcome Narasimhan";
        // BOM - Browser Object Model
        const confirmBox = confirm("Do you want to close this tab");

        if(confirmBox){
            title.innerText = "You're logged out";
        }else{
            title.innerText = "You are still loggedin";
        }
    })

})