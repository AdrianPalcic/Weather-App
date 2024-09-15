const apiKey = "ed4fd4175b416c1b6e663d971ce9b354";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.getElementById("weatherIcon"); // corrected id selector

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").textContent = "Grad nije pronaden";
        document.querySelector(".weather").style.display = "none"
        searchBar.value = "";

    } else {
        const data = await response.json();

    

        if (data.weather[0].main = "Thunderstorm") {
            weatherIcon.classList.replace("fa-cloud-sun-rain", "fa-cloud-bolt");
        } else if (data.weather[0].main = "Drizzle") {
            weatherIcon.classList.replace("fa-cloud-sun-rain", "fa-droplet");
        } else if (data.weather[0].main = "Rain") {
            weatherIcon.classList.replace("fa-cloud-sun-rain", "fa-cloud-showers-heavy");
        } else if (data.weather[0].main = "Snow") {
            weatherIcon.classList.replace("fa-cloud-sun-rain", "fa-snowflake");
        } else if (data.weather[0].main = "Atmosphere" || "Clouds") {
            weatherIcon.classList.replace("fa-cloud-sun-rain", "fa-cloud");
        } else if (data.weather[0].main = "Clear") {
            weatherIcon.classList.replace("fa-cloud-sun-rain", "fa-sun");
        }
    
        console.log(data.weather[0].main);
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
        searchBar.value = "";
    }
    
    }
   
searchButton.addEventListener("click", () => {
    checkWeather(searchBar.value);
    
});