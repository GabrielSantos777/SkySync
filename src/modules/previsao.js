//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d5a8191e9af72488e03633c1f84380a7
//d5a8191e9af72488e03633c1f84380a7


//VARIAVEIS E SELEÇOES DE EVENTOS
const apiKey = "d5a8191e9af72488e03633c1f84380a7";
const apiCountryURL = "https://countryflagsapi.netlify.app/flag/ ";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector('#search');


const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');

const weatherContainer = document.querySelector("#weather-data");



//FUNÇÕES
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`


    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data
}




const showWeatherData = async (city) => {
    const data = await getWeatherData(city)

    cityElement.innerText = data.name;
    tempElement.innerText = `${parseInt(data.main.temp)}°`;
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
    
    weatherContainer.classList.remove('hide')
    
    
}




//EVENTOS

searchBtn.addEventListener('click', (e) => {

    e.preventDefault();

    const city = cityInput.value;
    const warnig = document.querySelector('#warn')
    // verifica se o input está vazio
    if (city.trim() === '') {
        warnig.innerText = 'Por favor, escreva alguma coisa!';
        
    }else{
        warnig.innerText = '';
        showWeatherData(city)
    }
    

    

})


cityInput.addEventListener("keyup", (e) => {
    const warnig = document.querySelector('#warn')
    if(e.code === "Enter"){
        const city = e.target.value;
        if(city.trim() === ''){
            warnig.innerText = 'Por favor, escreva alguma coisa!';
        }else{
            warnig.innerText = '';
            showWeatherData(city)
        }

        
    }
})