const form = document.querySelector(".input");
const windSpeedElement = document.querySelector(".speed");
const descElement = document.querySelector(".desc");
const tempElement = document.querySelector(".temp");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const city = document.querySelector("#inputValue").value;
    console.log("Fetching weather for:", city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e867cdf5cf082f9d656395b384cac973&units=metric`)
        .then(res => res.json())
        .then(data => {
            const description = data.weather[0].description;
            const tempC = data.main.temp;
            const windSpeed = data.wind.speed;

            descElement.innerHTML = `🌦️Weather - ${description}`;
            tempElement.innerHTML = `🌡️Temperature- ${tempC} °C`;
            windSpeedElement.innerHTML = `💨WindSpeed - ${windSpeed} m/s`;

        })
        .catch(err => {
            console.error("Error fetching weather data:", err);
            descElement.innerHTML = "Error fetching data.";
            windSpeedElement.innerHTML = "";
            tempElement.innerHTML = "";
        });
});
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Light";
    } else {
        toggleBtn.textContent = "🌙 Dark";
    }
});


