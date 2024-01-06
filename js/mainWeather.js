// First DAy Forcastion
let toDayIsDateName = document.getElementById("toDayIsDateName");//toDayIsDateName 1
let toDayisDateNumber = document.getElementById("toDayisDateNumber"); // 2toDayisDateNumber
let countryName = document.getElementById("countryName");//3 country
let currentTemp = document.getElementById("currentTemp");//4
let currentTempImage = document.getElementById("currentTempImage");//5 icon
let currentTempStatus = document.getElementById("currentTempStatus");//6 text
let currentRainForcast = document.getElementById("currentRainForcast");//7 humidity
let currentWindSpeed = document.getElementById("currentWindSpeed");//8 wind_kph
let currentWindCompass = document.getElementById("currentWindCompass");//9 wind_dir
// Second DAy Forcastion
let secondDayName = document.getElementById("secondDayName");
let secondDayStatusImage = document.getElementById("secondDayStatusImage");
let maxForSecondDay = document.getElementById("maxForSecondDay");
let minForSecondDay = document.getElementById("minForSecondDay");
let statusSecondDay = document.getElementById("statusSecondDay");

// Third DAy Forcastion
let thirdDayNAme = document.getElementById("thirdDayNAme");
let thirdDayImage = document.getElementById("thirdDayImage");
let ThirdDayForcatMax = document.getElementById("ThirdDayForcatMax");
let ThirdDayForcastMin = document.getElementById("ThirdDayForcastMin");
let thirdDayText = document.getElementById("thirdDayText");
// forthDay
let forthDayNAme = document.getElementById("forthDayNAme");
let forthDayImage = document.getElementById("forthDayImage");
let forthDayForcatMax = document.getElementById("forthDayForcatMax");
let forthDayForcastMin = document.getElementById("forthDayForcastMin");
let forthDayText = document.getElementById("forthDayText");

// fifthDay
let fifthDayNAme = document.getElementById("fifthDayNAme");
let fifthDayImage = document.getElementById("fifthDayImage");
let fifthDayForcatMax = document.getElementById("fifthDayForcatMax");
let fifthDayForcastMin = document.getElementById("fifthDayForcastMin");
let fifthDayText = document.getElementById("fifthDayText");

// sixDay
let sixDayNAme = document.getElementById("sixDayNAme");
let sixDayImage = document.getElementById("sixDayImage");
let sixDayForcatMax = document.getElementById("sixDayForcatMax");
let sixDayForcastMin = document.getElementById("sixDayForcastMin");
let sixDayText = document.getElementById("sixDayText");

// sevenDay
let seventhDayNAme = document.getElementById("seventhDayNAme");
let seventhDayImage = document.getElementById("seventhDayImage");
let seventhDayForcatMax = document.getElementById("seventhDayForcatMax");
let seventhDayForcastMin = document.getElementById("seventhDayForcastMin");
let seventhDayText = document.getElementById("seventhDayText");

let imageBG = document.getElementById("weatherBG");
let countriesNameInOptions = document.getElementById("countriesNameInOptions");
let searchInput = document.getElementById("searchInput");
let clearInputs = document.getElementById("clearInputs");
let countryFlag = document.getElementById("countryFlag");

clearInputs.addEventListener("click",()=> {
  searchInput.value ="";
});

async function weather(callBack) {
  imageBG.classList.add("animationOpacity")
  let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=20e5704fce1c4fb384b154738240101&q=${callBack}&days=7`);
  let res = await data.json();
  const d = new Date()
  bgImage(res.current.condition.code)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  toDayIsDateName.innerHTML = days[d.getDay(res.location.localtime)];
  toDayisDateNumber.innerHTML = `${d.getDay(res.location.localtime)}${months[d.getMonth(res.location.localtime)]}`;
  countryName.innerHTML = res.location.country;
  currentTemp.innerHTML = `${res.current.temp_c}<sup>o</sup>C`;
  currentTempImage.setAttribute("src",`https:${res.current.condition.icon}`)
  currentTempStatus.innerHTML =res.current.condition.text;
  currentRainForcast.innerHTML =`${res.current.humidity}<span>%</span>`;
  currentWindSpeed.innerHTML =`${res.current.wind_kph} <span>km/h</span>`;
  currentWindCompass.innerHTML =res.current.wind_dir;
// SecondDay
let nextday = new Date(res.forecast.forecastday[1].date)
secondDayName.innerHTML = days[nextday.getDay()];
secondDayStatusImage.setAttribute("src",`https:${res.forecast.forecastday[1].day.condition.icon}`);
maxForSecondDay.innerHTML = `${res.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C`;
minForSecondDay.innerHTML = `${res.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>`;
statusSecondDay.innerHTML = res.forecast.forecastday[1].day.condition.text;
// ThirdDay 
let nextnextDay = new Date(res.forecast.forecastday[2].date)
thirdDayNAme.innerHTML = days[nextnextDay.getDay()];
thirdDayImage.setAttribute("src",`https:${res.forecast.forecastday[2].day.condition.icon}`);
ThirdDayForcatMax.innerHTML = `${res.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C`;
ThirdDayForcastMin.innerHTML = `${res.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>`;
thirdDayText.innerHTML = res.forecast.forecastday[2].day.condition.text;
// FourthDay
let nextthirdDay = new Date(res.forecast.forecastday[3].date)
forthDayNAme.innerHTML = days[nextthirdDay.getDay()];
forthDayImage.setAttribute("src",`https:${res.forecast.forecastday[3].day.condition.icon}`);
forthDayForcatMax.innerHTML = `${res.forecast.forecastday[3].day.maxtemp_c}<sup>o</sup>C`;
forthDayForcastMin.innerHTML = `${res.forecast.forecastday[3].day.mintemp_c}<sup>o</sup>`;
forthDayText.innerHTML = res.forecast.forecastday[3].day.condition.text;
// FifthDay
let nextfifthDay = new Date(res.forecast.forecastday[4].date)
fifthDayNAme.innerHTML = days[nextfifthDay.getDay()];
fifthDayImage.setAttribute("src",`https:${res.forecast.forecastday[4].day.condition.icon}`);
fifthDayForcatMax.innerHTML = `${res.forecast.forecastday[4].day.maxtemp_c}<sup>o</sup>C`;
fifthDayForcastMin.innerHTML = `${res.forecast.forecastday[4].day.mintemp_c}<sup>o</sup>`;
fifthDayText.innerHTML = res.forecast.forecastday[4].day.condition.text;
// SixDay
let nextsixDay = new Date(res.forecast.forecastday[5].date)
sixDayNAme.innerHTML = days[nextsixDay.getDay()];
sixDayImage.setAttribute("src",`https:${res.forecast.forecastday[5].day.condition.icon}`);
sixDayForcatMax.innerHTML = `${res.forecast.forecastday[5].day.maxtemp_c}<sup>o</sup>C`;
sixDayForcastMin.innerHTML = `${res.forecast.forecastday[5].day.mintemp_c}<sup>o</sup>`;
sixDayText.innerHTML = res.forecast.forecastday[5].day.condition.text;
// SevenDay
let nextsevenDay = new Date(res.forecast.forecastday[6].date)
seventhDayNAme.innerHTML = days[nextsevenDay.getDay()];
seventhDayImage.setAttribute("src",`https:${res.forecast.forecastday[6].day.condition.icon}`);
seventhDayForcatMax.innerHTML = `${res.forecast.forecastday[6].day.maxtemp_c}<sup>o</sup>C`;
seventhDayForcastMin.innerHTML = `${res.forecast.forecastday[6].day.mintemp_c}<sup>o</sup>`;
seventhDayText.innerHTML = res.forecast.forecastday[6].day.condition.text;
imageBG.classList.remove("animationOpacity")
}


function bgImage(codeimage) {
  if (
    codeimage==1000



) {
    imageBG.style.backgroundImage = `url("./imges/weather/day-2.jpg")`
  } else if (
    codeimage==1003||
    codeimage==1063||
    codeimage==1006 
  ) {
    imageBG.style.backgroundImage = `url("./imges/weather/day-1.jpg")`
  }else if (
    codeimage==1009||
    codeimage==1030||
    codeimage==1066||
    codeimage==1069||
    codeimage==1072||
    codeimage==1087||
    codeimage==1114||
    codeimage==1117||
    codeimage==1135||
    codeimage==1147||
    codeimage==1150||
    codeimage==1153||
    codeimage==1168||
    codeimage==1171    
  ) {
    imageBG.style.backgroundImage = `url("./imges/weather/day-3.jpg")`
  }else if (
    codeimage==1180||
    codeimage==1183||
    codeimage==1186||
    codeimage==1189||
    codeimage==1192||
    codeimage==1195    
  ) {
    imageBG.style.backgroundImage = `url("./imges/weather/night-2.jpg")`
  }else if (
    codeimage==1198||
    codeimage==1201||
    codeimage==1204||
    codeimage==1207||
    codeimage==1210||
    codeimage==1213  
  ) {
    imageBG.style.backgroundImage = `url("./imges/weather/night-1.jpg")`
  }else if (
    codeimage==1216||
    codeimage==1219||
    codeimage==1222||
    codeimage==1225||
    codeimage==1237||
    codeimage==1240 
  ) {
    imageBG.style.backgroundImage = `url("./imges/weather/night-2.jpg")`
  }else if (
    codeimage==1243||
    codeimage==1246||
    codeimage==1249||
    codeimage==1252||
    codeimage==1255||
    codeimage==1258   
  ) {
    imageBG.style.backgroundImage = `url("./imges/weather/night-3.jpg")`
  }else if (
    codeimage==1261||
    codeimage==1264||
    codeimage==1273||
    codeimage==1276||
    codeimage==1279||
    codeimage==1282    
  ) {
    imageBG.style.backgroundImage = `url("./imges/weather/night-4.jpg")`
  }
}

async function contriees() {
  let data = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
  let resConetires = await data.json();
  let flags = [];
  let final = "";
  for( let i = 0 ; i < resConetires.length ; i++){
    
    final +=  `<option value="${resConetires[i].name.common}">`;
  }
  countriesNameInOptions.innerHTML = final
}
contriees()

searchInput.addEventListener("input",()=>{
  weather(searchInput.value)
})
weather("Egypt")

const parentCards = document.getElementById("parentCards");
let pressed = false
let startX =0;

parentCards.addEventListener("mousedown",function(e){
  pressed=true
  startX = e.clientX
  this.style.cursor = "grabbing"
})
parentCards.addEventListener("mouseup",function(e){
  pressed=false
  this.style.cursor = "grab"
})
parentCards.addEventListener("mouseleave",function(e){
  pressed=false
})
parentCards.addEventListener("mousemove",function(e){
  if (!pressed) {
    return
  }
  this.scrollLeft += startX - e.clientX
})
