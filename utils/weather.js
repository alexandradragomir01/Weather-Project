//definesc o functie care sa imi returneze iconita de la Ospen Weather ppe baza coduluiprimit de la API

function getWeatherIcon (iconCode){
    return `https://openweathermap.org/img/wn/${iconCode}.png`;

}

//primim vteza in m/s si vrem sa i convertim in km/h

function windToKmPerHour (meterPerSec){
    return (meterPerSec*3600)/1000;
}