const apiUrl = "https://icanhazdadjoke.com/";
const newJoke = document.getElementById("newJoke");
const reportJokes = [];

const getNewJoke = () => {
  fetch(`${apiUrl}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (newJoke.textContent = data.joke));
  document.getElementById("scoreOne").disabled = false;
  document.getElementById("scoreTwo").disabled = false;
  document.getElementById("scoreThree").disabled = false;
  document.getElementById("newScore").classList.remove("transparent");
};

let value = 2;
document.getElementById("start-button").addEventListener("click", () => {
  if (value % 2 === 0) {
    getNewJoke();
    value++;
  } else {
    getNewChuckNorrisJoke();
    value--;
  }
});

document.getElementById("score").addEventListener("click", (e) => {
  if (e.target.id === "scoreOne") {
    let joke = newJoke.textContent;
    let score = 1;
    let d = new Date();
    let date = d.toISOString();

    let newValuation = new valuationJokes(joke, score, date);
    reportJokes.push(newValuation);
    console.log(reportJokes);
    document.getElementById("scoreOne").disabled = true;
    document.getElementById("scoreTwo").disabled = true;
    document.getElementById("scoreThree").disabled = true;
    document.getElementById("newScore").classList.add("transparent");
  } else if (e.target.id === "scoreTwo") {
    let joke = newJoke.textContent;
    let score = 2;
    let d = new Date();
    let date = d.toISOString();
    let newValuation = new valuationJokes(joke, score, date);
    reportJokes.push(newValuation);
    console.log(reportJokes);
    document.getElementById("scoreOne").disabled = true;
    document.getElementById("scoreTwo").disabled = true;
    document.getElementById("scoreThree").disabled = true;
    document.getElementById("newScore").classList.add("transparent");
  } else if (e.target.id === "scoreThree") {
    let joke = newJoke.textContent;
    let score = 3;
    let d = new Date();
    let date = d.toISOString();
    let newValuation = new valuationJokes(joke, score, date);
    reportJokes.push(newValuation);
    console.log(reportJokes);
    document.getElementById("scoreOne").disabled = true;
    document.getElementById("scoreTwo").disabled = true;
    document.getElementById("scoreThree").disabled = true;
    document.getElementById("newScore").classList.add("transparent");
  }
});

const weatherApi =
  "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=097b2f17ba3673c3cc107c3f0f3e001b";

fetch(`${weatherApi}`)
  .then((responsive) => responsive.json())
  .then((data) => {
    data.main.temp;
    let actualTemperature = Math.round(data.main.temp);
    console.log(
      `La temperatura actual en Barcelona es de ${actualTemperature} grados`
    );
  });

const chuckNorrisApi = "https://api.chucknorris.io/jokes/random";
const getNewChuckNorrisJoke = () => {
  fetch(`${chuckNorrisApi}`)
    .then((response) => response.json())
    .then((data) => (newJoke.textContent = data.value));

  document.getElementById("scoreOne").disabled = false;
  document.getElementById("scoreTwo").disabled = false;
  document.getElementById("scoreThree").disabled = false;
  document.getElementById("newScore").classList.remove("transparent");
};
