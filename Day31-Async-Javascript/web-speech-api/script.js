const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(!SpeechRecognition){
    alert("Your browser does not support Speech Recognition.");
}else{
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    const output = document.getElementById("output");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");

    startBtn.addEventListener("click", () => {
        recognition.start();
        output.textContent = "Listening...";
    });

    stopBtn.addEventListener("click", () => {
        recognition.stop();
    });

    recognition.onresult = (e) => {
        let transcript = "";
        for(let i = e.resultIndex; i < e.results.length; i++){
            transcript += e.results[i][0].transcript;
        }
        output.textContent = transcript;
    }

    // Hi welcome to Entri Live Session
    // 0    1       2   3   4       5

    recognition.onerror = (e) => {
        console.log(e.error);
    }

}