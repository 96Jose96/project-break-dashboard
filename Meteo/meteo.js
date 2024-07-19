url = 'https://api.weatherapi.com/v1/forecast.json?key=812f1314d5e54007a3d92843241907&q=madrid&aqi=no'
const country = document.getElementById('country')

const getWeather = async () => {
    const response = await fetch(url);
    const weather = await response.json();
    return weather;
}

getWeather().then(data => console.log(data))

