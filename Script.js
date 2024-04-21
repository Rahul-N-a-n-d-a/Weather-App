const apikey = "fce7eba438cb999bdfe560be8cb145a2";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let weatherImage = document.querySelector(".weather-img");

document.querySelector(".js-search-btn").addEventListener('click', () => {
    const city = document.querySelector('.js-cityName').value;
    fetch(url + `&appid=${apikey}&q=${city}`).then(
        response => {
            if (response.status == 404) {
                document.querySelector('.error').style.display = "block";
                document.querySelector('.weather').style.display = "none";
            }
            return response.json()
        }).then(
            data => {
                console.log(data);
                document.querySelector('.climate-condition').innerHTML = data.weather[0].main;
                document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
                document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

                if (data.weather[0].main === "Clouds") {
                    weatherImage.src = "./images/clouds.png";
                } else if (data.weather[0].main === "Clear") {
                    weatherImage.src = "./images/clear.png"
                } else if (data.weather[0].main === "Drizzle") {
                    weatherImage.src = "./images/drizzle.png"
                } else if (data.weather[0].main === "Mist") {
                    weatherImage.src = "./images/mist.png"
                } else if (data.weather[0].main === "Rain") {
                    weatherImage.src = "./images/rain.png"
                } else if (data.weather[0].main === "Snow") {
                    weatherImage.src = "./images/snow.png"
                } else {
                    weatherImage = "./images/Clouds.png"
                }

                document.querySelector('.weather').style.display = "block";
                document.querySelector('.error').style.display = "none";
            })
})