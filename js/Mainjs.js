let navlinks = document.querySelectorAll(".navlink");
let itemCard = document.getElementById("itemCard");
let loading = document.getElementById("loading");
let games = document.getElementById("games");
let details = document.getElementById("details");
let CloseBtn = document.getElementById("CloseBtn");
let detilesBody = document.getElementById("detilesBody");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let weatherBtn = document.getElementById("weatherBtn");
let searchSection = document.getElementById("searchSection");
let weatherParent = document.getElementById("weatherParent");
let puffContainer = document.getElementById("puffContainer")
let puffContainerTwo = document.getElementById("puffContainerTwo")
let currentIndex = 0;
let allGames = [];
for (let i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", (e) => {
    removeActive();
    e.target.classList.add("active");
    myHttp(e.target.innerHTML);
  });
}
function removeActive() {
  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].classList.remove("active");
  }
}

// Get Games
async function myHttp(searshGames) {
  loading.classList.remove("d-none");
  itemCard.innerHTML = "";
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${searshGames}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9788d6b836mshf075dacbbce8953p184c49jsn653974580939",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  for (let i = 0; i < result.length; i++) {
    let thumbnail = result[i].thumbnail;
    let title = result[i].title;
    let short_description = result[i].short_description;
    let genre = result[i].genre;
    let platform = result[i].platform;
    displayData(thumbnail, title, short_description, genre, platform);
  }
  loading.classList.add("d-none");
  GetDetails(result);
  allGames = result;
}
myHttp("mmorpg");
// Display Games
function displayData(thumbnail, title, short_description, genre, platform) {
  itemCard.innerHTML += `
<div class="col">
<div class="card bg-transparent text-light">
  <div class="card-body">
    <figure>
      <img class="card-img-top" src=${thumbnail} alt="">
    </figure>
    <figcaption>
      <div class="d-flex mb-2 justify-content-between align-items-center">
        <h3 class="h5 mb-0 cardTitle headerFonts">${title}</h3>
        <span class="badge bg-primary p-2">Free</span>
      </div>
      <p class="cardNAme opacity-50 text-light text-center">${short_description}</p>
    </figcaption>
  </div>
  <footer class="card-footer d-flex justify-content-between align-items-center ">
    <span class="cardNAme badge badge-color">${genre}</span>
    <span class="cardNAme badge badge-color">${platform}</span>
  </footer>
</div>
</div>
`;
}
// Get current Index of CLick
function GetDetails(result) {
  let currentCards = Array.from(document.querySelectorAll("#searchSection .col"));
  for (let i = 0; i < currentCards.length; i++) {
    currentCards[i].addEventListener("click", () => {
      let currenGameIndex = currentCards.indexOf(currentCards[i]);
      let currentGameId = result[currenGameIndex].id;
      currentIndex = currentCards.indexOf(currentCards[i]);
      myHttpDetiles(currentGameId);
      games.classList.add("d-none");
      details.classList.remove("d-none");
    });
  }
}

// Display current Index of CLick
async function myHttpDetiles(currentGameId) {
  loading.classList.remove("d-none");
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${currentGameId}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9788d6b836mshf075dacbbce8953p184c49jsn653974580939",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  let title = result.title;
  let thumbnail = result.thumbnail;
  let genre = result.genre;
  let platform = result.platform;
  let status = result.status;
  let description = result.description;
  let game_url = result.game_url;
  displayDetiles(
    title,
    thumbnail,
    genre,
    platform,
    status,
    description,
    game_url
  );
  loading.classList.add("d-none");
}

function displayDetiles(
  title,
  thumbnail,
  genre,
  platform,
  status,
  description,
  game_url
) {
  detilesBody.innerHTML = `
        <div  class="col-12 col-md-4">
          <figure>
            <img class="w-100" src="${thumbnail}" alt="thumbnail">
          </figure>
        </div>
        <div class="col-12 col-md-8 text-light fw-bolder">
          <h3 class="headerFonts">Title: <span>${title}</span></h3>
          <p>Category: <span class="headerFonts badge bg-info text-black text-uppercase p-2">${genre}</span></p>
          <p>Platform: <span class="headerFonts badge bg-info text-black text-uppercase p-2">${platform}</span></p>
          <p>Status: <span class="headerFonts badge bg-info text-black text-uppercase p-2">${status}</span></p>
          <p>${description}</p>
          <a href="${game_url}" target="_Blank" class="btn btn-outline-warning text-white">Show Game</a>
        </div>
  `;
}
// lightBox Slider

nextBtn.addEventListener("click", () => {
  nextGameFunc();
});

function nextGameFunc() {
  let currentCards = Array.from(document.querySelectorAll("#searchSection .col"));
  currentIndex++;
  if (currentIndex == currentCards.length) {
    currentIndex = 0;
  }
  myHttpDetiles(allGames[currentIndex].id);
}

prevBtn.addEventListener("click", () => {
  prevGameFunc();
});
function prevGameFunc() {
  let currentCards = Array.from(document.querySelectorAll("#searchSection .col"));
  --currentIndex;
  if (currentIndex < 0) {
    currentIndex = currentCards.length - 1;
  }
  myHttpDetiles(allGames[currentIndex].id);
}
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    nextGameFunc();
  } else if (e.key == "ArrowLeft") {
    prevGameFunc();
  }
});

// Close Detiles LightBox
CloseBtn.addEventListener("click", () => {
  closeBtnn();
});

function closeBtnn() {
  games.classList.remove("d-none");
  details.classList.add("d-none");
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeBtnn();
  }
});



weatherBtn.addEventListener("click",()=>{
  displayChange()
  puffContainer.classList.add("d-none")
  puffContainerTwo.classList.remove("d-none")
  puffContainerTwo.classList.add("animationOpacity")
})
puffContainerTwo.addEventListener("click",()=>{
  displayChange()
  puffContainer.classList.remove("d-none")
  puffContainer.classList.add("animationOpacity")
  puffContainerTwo.classList.add("d-none")
})

function displayChange() {
  if (weatherParent.classList.contains("weatherAnimation")) {
    weatherParent.classList.remove("weatherAnimation")
    weatherParent.classList.add("weatherAnimationxxx")
  } else {
    weatherParent.classList.add("weatherAnimation")
    weatherParent.classList.remove("weatherAnimationxxx")

  }
  weatherParent.classList.remove("d-none")
  if (searchSection.classList.contains("searchAnimation")) {
    searchSection.classList.remove("searchAnimation")
    searchSection.classList.add("searchAnimationXX")
  } else {
    searchSection.classList.add("searchAnimation")
    searchSection.classList.remove("searchAnimationXX")
  }
}