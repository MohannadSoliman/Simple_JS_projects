function get_weather(){
    //user input
    const city = document.getElementById('city-entered').value;
    //api keys available
    const api_key = 'fe6244e7f5530cdd8023bc00914c9f90';
    const api_key2 = 'c720913f8a8295e14dad573afb575c29';
    const weather_api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key2}`;
    fetch(weather_api)
    .then(response =>{
        return response.json();
    }).then(data =>{
        // display weather data
        console.log(data);
        document.getElementById('location').textContent = `Weather in ${data['name']}, ${data['sys']['country']}`;
        document.getElementById('feels-like').textContent = `Feels like ${data['main']['feels_like']}°C`;
        document.getElementById('temp').textContent = `Temperature ${data['main']['temp']}°C`;
        document.getElementById('temp-max').textContent = `Max ${data['main']['temp_max']}°C`;
        document.getElementById('temp-min').textContent = `Min ${data['main']['temp_min']}°C`;
        document.getElementById('humidity').textContent = `Humidity ${data['main']['humidity']}%`;

        // showing the icon
        const icon_id = data['weather'][0]['icon'];
        const weather_icon_api = `http://openweathermap.org/img/wn/${icon_id}@4x.png`;
        document.getElementById('weather-icon').src = weather_icon_api;

    });
}
