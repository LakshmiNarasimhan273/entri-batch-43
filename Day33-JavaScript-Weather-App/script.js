document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("getweatherBtn");

    btn.addEventListener("click", async () => {
        const city = document.getElementById("cityInput").value.trim();
        const resultDiv = document.getElementById("weatherResult");

        const API_KEY = "247107d7e520ada8d515f771fe3b8f39";

        if(!city){
            resultDiv.innerHTML = 
            `
            <div class="alert alert-warning">Please enter a city name</div>
            `;
            return;
        }

        resultDiv.innerHTML = 
        `
        <div class="spinner-border text-primary text-center"></div>
        `;

        try{
            // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

            if(!response){
                throw new Error("City not Found");
            }

            const data = await response.json();

            console.log(data);

            resultDiv.innerHTML = `
            <h4>${data.name}, ${data.sys.country}</h4>
            <h5>Weather: ${data.weather[0].main}</h5>
            <p>Temperature: ${data.main.temp}</p>
            <p>Humidity: ${data.main.humidity}</p>
            <p>Pressure: ${data.main.pressure}</p>
            <p>Wind Speed: ${data.wind.speed}</p>
            `

        }catch(err){
            resultDiv.innerHTML = 
            `
            <div class="alert alert-danger">${err.message}</div>
            `
        }
    })
})