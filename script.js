let weather = {
    apikey: "710168d1efb32cca5a0d00861dc444b3",
    fetchweather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
        ).then((responce) => responce.json()).then((data) => this.displayweather(data))
        // console.log(city)
    },
    displayweather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        function image() {
            var icons;
            switch (icon) {
                case "01d":
                    icons = "./icons/sunny.png";
                    break;
                case "01n":
                    icons = "./icons/moon.png";
                    break;
                case "02d":
                    icons = "./icons/mostlySunny.png";
                    break;
                case "02n":
                    icons = "./icons/moon.png";
                    break;
                case "03d":
                    icons = "./icons/cloudy.png";
                    break;
                case "03n":
                    icons = "./icons/cloudy.png";
                    break;
                case "04d":
                    icons = "./icons/Environment.png";
                    break;
                case "04n":
                    icons = "./icons/cloudy.png";
                    break;
                case "09d":
                    icons = "./icons/rain.png";
                    break;
                case "09n":
                    icons = "./icons/rain.png";
                    break;
                case "10d":
                    icons = "./icons/rain.png";
                    break;
                case "10n":
                    icons = "./icons/rain.png";
                    break;
                case "11d":
                    icons = "./icons/thunder.png";
                    break;
                case "11n":
                    icons = "./icons/Thunders.png";
                    break;
                case "13d":
                    icons = "./icons/snow.png";
                    break;
                case "13n":
                    icons = "./icons/snow.png";
                    break;
                case "50d":
                    icons = "./icons/mist.png";
                    break;
                case "50n":
                    icons = "./icons/mist.png";
                    break;
                default:
                    break;
            }
            document.querySelector('.icon').src = icons;
            // console.log(icons);
            // console.log(icon)

        }
        image();
        // console.log(name, icon, humidity, description, speed);
        document.querySelector(".city").innerText = name;
        // document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp);
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = " Wind Speed : " + speed + "km/h";
        document.querySelector('main').classList.remove("loading");
        // document.body.style.background="url('https:source.unsplash.com/1600X900/?"+name+"')"
    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search-button").addEventListener('click', () => {
    weather.search();
});
document.querySelector('.search-bar').addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
        weather.search();
    }
})
weather.fetchweather('Ferozepur')