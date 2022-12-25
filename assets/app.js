const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd498f76bf0msh5148061168526e6p1611f7jsn577eff3bb9f3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("New Delhi");


// Script for when click nav toggler outside on screen then navbar collapse
window.onload = function () {
	document.addEventListener("click", function (event) {
		// if the clicked element isn't child of the navbar, you must close it if is open
		if (!event.target.closest("#navbar") && document.getElementById("navbarSupportedContent").classList.contains("show")) {
			document.getElementById("menu_button").click();
		}
	});
}