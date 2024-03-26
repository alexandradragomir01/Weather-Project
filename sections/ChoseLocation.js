const bucharestButton = document.querySelector(".dropdown-menu .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu .oradea");
const aradButton = document.querySelector(".dropdown-menu .arad");
const sibiuButton = document.querySelector(".dropdown-menu .sibiu");

//declaram o functie care ne schimba orasul curent

function updateCurrentCity(city) {
     //mai intai trebuie sa selectez elementul care imi tine orasul curent
  const currentCityElem = document.querySelector(".current-city");
  currentCityElem.innerHTML = city;
}

//declaram o functie care ne va schimba orasul si ne va face update la vreme

function updateWeather(city) {
    //actualizam orasul selectat din drop-dowm in localStorage
    localStorage.setItem("city", city);

    //reafisam vremea curenta in functie de orasul selectat
  displayCurrentWeather(city);
   //actualizam orasul afisat pe ecran - o sa ne ajutam de o alta functie
    //apelez functia updatecurrentCity
  updateCurrentCity(city);
  displayWeatherForecast(city);
}

 //actualizam orasul afisat pe ecran - o sa ne ajutam de o alta functie
//apelez functia updatecurrentCity

bucharestButton.addEventListener("click", function () {
    //la click pe butonul Bucuresti ar trebui sa schimb numele orasului 
    //si la al doilea lucru sa fac update la vreme
  updateWeather("București");
});

timisoaraButton.addEventListener("click", function () {
  updateWeather("Timișoara");
});

oradeaButton.addEventListener("click", function () {
  updateWeather("Oradea");
});

aradButton.addEventListener("click", function () {
  updateWeather("Arad");
});

sibiuButton.addEventListener("click", function () {
  updateWeather("Sibiu");
});


