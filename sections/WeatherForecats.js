// Declar functia care imi va afisa vremea pe urmatoarele 5 zile, iar apelul functiei se va face din index.js
function displayWeatherForecast(city) {
    // generam link-ul API-ului catre care vom face request-ul
    const forecastWeatherEndpoint = getForecastWeatherEndpoint(city);
  
    //imi selectez elementul cu clasa .weather-forecast, deoarece aici inserez html-ul generat in pasul cu fetch
    const weatherForecastContainer = document.querySelector(".weather-forecast");
    //inainte de a face call-ul catre server (adica inaiante de fetch) golesc container-ul de weatherForecast
    weatherForecastContainer.innerHTML = "";
  
    //facem request catre API
    fetch(forecastWeatherEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        //ne folosim de object distructuring pentru a accesa doar proprietatea list din obiectul data
        const { list } = data;
  
        // ne declaram un obiect gol in care o sa tinem predictiile pentru zile
        const daysMap = {};
  
        //iteram prin cele 40 de predictii primite de la server.
        list.forEach((element) => {
          // Extragem data predictiei
          const { dt } = element;
          const day = getDayOfTheWeek(dt);
          //daca avem deja ziua saptamaniiin daysMap ii adaugam o noua predictie, adica ii adaugam element
          if (daysMap[day]) {
            daysMap[day].push(element);
            //altfel daca nu avem ziua saptamanii in daysMap o sa adaugam ziua respectiva impreuna cu elementul sau predictia
          } else {
            daysMap[day] = [element];
          }
        });
  
        //iteram prin obiextul daysMao care are deja grupate pe zile, folosind instructiunea for...in
        for (key in daysMap) {
          //inserez in HTML ziua din obiectul daysMap
          weatherForecastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`;
          //imi extrag elementul curent din obiectul daysMap
          let weatherByDays = daysMap[key];
          weatherByDays.forEach((element) => {
            //pentru fiecare element sau predictie pot sa ma apuc sa extrag datele de interes
            const { dt, main, weather } = element;
            //procesez ora
            const hour = getHour(dt);
            //rotunjim temperatura
            const temperature = Math.round(main.temp);
            const realFeel = Math.round(main.feels_like);
            //atentie la descriere - deoarece weather este un array cu un singur element -> accesam mereu elemntul 0
            const description = weather[0].description;
            const weatherIcon = getWeatherIcon(weather[0].icon);
  
            //inseram in HTML toate datele de mai sus
            weatherForecastContainer.innerHTML += `
                <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
                  <div>${hour}</div>
                  <div><img src="${weatherIcon}" alt="" /></div>
                  <div class="fs-3"><strong>${temperature}°C</strong></div>
                  <div>${description}</div>
                  <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
                </div>
              `;
          });
        }
      });
  }