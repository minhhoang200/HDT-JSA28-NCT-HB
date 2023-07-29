const API_KEY = "314ea11818fc518a095475504e399643";

const DEFAULT_VALUE = "__";
const searchInput = document.querySelector('.search-input');
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");



// Lập trình bắt sự kiện enter tại input
searchInput.addEventListener("change", (event) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Code truyền dữ liệu vào HTML
      cityName.innerHTML = data.name || DEFAULT_VALUE;
      weatherState.innerHTML = data.weather[0].description;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temperature.innerHTML = Math.round(data.main.temp);


      ///// Additional Section
      let sunriseTime = new Date(Number(data.sys.sunrise) * 1000);
      console.log("sunriseTime: ", sunriseTime);
      sunrise.innerHTML = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`;

      let sunsetTime = new Date(Number(data.sys.sunset) * 1000);
      console.log("sunsetTime: ", sunsetTime);
      sunset.innerHTML = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`;



      // sunrise.innerHTML = data.sys.sunrise;
      // sunset.innerHTML = data.sys.sunset;

      humidity.innerHTML = data.main.humidity;
      windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2);
    })


    .catch(err => console.error(err));
})



// function sum() {
//   return 1;
// }

// const sum2 = () => 1; /// Sau mũi tên là 1 kiểu dữ liệu gì đó đơn độc => hiểu là đang return nó.
// console.log(
//   sum2()
// );