const apiKey = "38bc1c5fbc0ff9505c48a4123fbaeef7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const btn = document.querySelector(".search button")
const input = document .querySelector(".search input")
async function weather(city){
  
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    const data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  }

}
btn.addEventListener("click", function(){
  weather(input.value)
})