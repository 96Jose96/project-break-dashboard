document.addEventListener('DOMContentLoaded', () => {
    const city = 'madrid'
    const url = `https://api.weatherapi.com/v1/forecast.json?key=812f1314d5e54007a3d92843241907&q=${city}&aqi=no`;

    const getWeather = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error', response.status);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Error al obtener datos', error);
        }
    };

    const currentWeather = (data) => {
        const currentContainer = document.getElementById('currentcontainer');
        const divTemp = document.getElementById('divtemp');

        const location = `${data.location.name} / ${data.location.country}`;
        const currentCondition = data.current.condition.text;
        const currentTempIcon = data.current.condition.icon;
        const currentTemp = `${data.current.temp_c} ºC`;
        const humidity = `Humedad: ${data.current.humidity}%`
        const precip = `Precipitaciones: ${data.current.precip_in}%`
        const wind = `Viento ${data.current.wind_kph} Km/h`

        console.log(wind);

        const currentTemplate = 
            `
            <div class="location">
                <span>${location}</span>
                <span>${currentCondition}</span>
                <img src=${currentTempIcon} />
            </div>
            <div class="tempconditions">
                <div class="currenttemp">
                    <span>${currentTemp}</span>
                </div>
                <div class="weatherconditions">
                    <span>${humidity}</span>
                    <span>${precip}</span>
                    <span>${wind}</span>
                </div>
            </div>    
            `

        currentContainer.innerHTML = currentTemplate;
    };
    getWeather().then((data) => console.log(data))
    getWeather().then((data) => currentWeather(data));
    
    
});

