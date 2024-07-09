function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'd09eb1858c584116a8731159240907'; // Replace with your WeatherAPI.com API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c} &deg;C</p>
                <p>Description: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} km/h</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}
