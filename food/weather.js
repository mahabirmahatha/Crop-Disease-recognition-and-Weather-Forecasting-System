document.getElementById('predict').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
const apiKey = 'YOUR_API_KEY_HERE'; // Get your API key from https://openweathermap.org/api

    const weatherContainer = document.getElementById('weather');

    if (!city) {
weatherContainer.innerHTML = '<p style="color: red;">Please enter a city name.</p>';

        return;
    }

    try {
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        const data = await response.json();

        if (response.ok) {
            const { main, weather } = data;
            // Show loading indicator
            weatherContainer.innerHTML = '<p>Loading weather data...</p>';

            weatherContainer.innerHTML = `
                <h3>Weather in ${city}</h3>
                <p>Temperature: ${main.temp}°C</p>
                <p>Weather: ${weather[0].description}</p>
                <p>Humidity: ${main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Visibility: ${data.visibility/1000} km</p>
            `;

        } else {
weatherContainer.innerHTML = `<p style="color: red;">Error: City "${city}" not found. Please check the spelling and try again.</p>`;


        }
    } catch (error) {
weatherContainer.innerHTML = `<p style="color: red;">Network Error: Unable to fetch weather data. Please check your internet connection.</p>`;


    }
});
