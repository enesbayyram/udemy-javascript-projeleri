class WeatherAPI {
    constructor() {
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "40780f584ae83749b62a5335ccf1e583"
    }

    async getWeatherInfo(cityName) {
        const response = await fetch(`${this.baseUrl}?q=${cityName}&units=metric&lang=tr&appid=${this.apiKey}`)
        const data = await response.json();
        return data;
    }
}