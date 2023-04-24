//Elementleri Seçmek
const container = document.querySelector(".container");
const searchInput = document.querySelector("#searchInput");
const cityName = document.querySelector(".cityName");
const degree = document.querySelector(".degree");
const desc = document.querySelector(".desc");

const weatherApi = new WeatherAPI();

searchInput.addEventListener("keypress", getWeatherInfo);


function getWeatherInfo(e) {
    if (e.keyCode == '13') {
        //Enter'a basmış.
        const cityName = searchInput.value.trim();
        weatherApi.getWeatherInfo(cityName)
            .then((data) => {
                if (data.message === "city not found") {
                    alert("Şehir bulunamadı")
                } else {
                    console.log(data)
                    displayInfos(data);
                }
            })
            .catch((error) => console.log(error));
    }
}


function displayInfos(data) {
    cityName.textContent = data.name;
    degree.textContent = `${Math.round(data.main.temp)}°`;
    desc.textContent = data.weather[0].description;
    clearInputs();
}

function clearInputs(){
    searchInput.value="";
}