const apikey = "d23e59eab326a3d876f7751432c2b665";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const City = document.querySelector(".city");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");



async function CheckWeather(city) {
    const responce = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await responce.json();
    console.log(data);
    
    City.innerText = data.name;
    temp.innerText = Math.round(data.main.temp) + "°C";
    humidity.innerText = data.main.humidity + "%";
    wind.innerText = data.wind.speed + "km/h";
}

searchbtn.addEventListener("click", () =>{
    CheckWeather(search.value);
})



