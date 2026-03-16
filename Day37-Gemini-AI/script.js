document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = "AIzaSyDmyvDNHS_7ICo1GHEzRPmdGMwuK_A8Uu8";

    const button = document.getElementById("askGemini");

    button.addEventListener("click", async () => {
        const input = document.getElementById("userInput").value.trim();
        const resultDiv = document.getElementById("result");

        if(!input){
            resultDiv.innerHTML = `
            <div class="alert alert-warning text-center fw-bold">Please Enter some Topics to Search</div>
            `;
            return;
        };

        const prompt = `
        Provide a comprehensive explanation of ${input}.
        Include:
        - Clear definition
        - Background context
        - Key facts or example
        - Give Some web reference link
        - Why it matters or where it's used

        write at least 100 words
        `;

        resultDiv.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status"></div>
        </div>
        `;

        try{

            // https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=

            // API CALL - GEMINI
            const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {role: "user", parts: [{text: prompt}]}
                    ]
                })
            });

            const data = await response.json();

            console.log(data);

            // mandatory type safety process

            const output = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            resultDiv.innerText = output;

        }catch(err){
            resultDiv.innerText = "Error Calling on Gemini AI";
        }

    })
})