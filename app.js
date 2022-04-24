let weather = {
  "apiKey": "0eaa7b16fc3f12257c0318e77faea19d",
  fetchWeather: function(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    ).then((res) => res.json()
    ).then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector('.city').innerText = "Weather in " + name;
    document.querySelector('.icon').src =
    "https://openweathermap/img/wn/" + icon + ".png" + name;
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = Math.round((temp - 273)) + "°C";
    document.querySelector('.humidity').innerText = "Humidity " + humidity + "%";
    document.querySelector('.wind').innerText = "Wind speed " + speed;
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900?${name})`
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
}
document.querySelector('.search button').addEventListener('click', function() {
  weather.search();
});
document.querySelector('.search-bar').addEventListener('keyup', function(e) {
  if(e.key === "Enter") {
    weather.search();
  }
});

weather.fetchWeather("denver");