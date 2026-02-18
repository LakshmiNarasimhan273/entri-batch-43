function changeMessage(){
    const greetMessage = document.getElementById("greeting");
    greetMessage.innerText = "Welcome back Narasimhan";
}
// changeMessage() -> it raises a bug when the page loads it will automatically
// update the content without clicking the button

function checkAvailablity(){
    const courses = document.getElementsByClassName("course");
    for(let i = 0; i < courses.length; i++){
        courses[i].style.color = "green";
    }
}