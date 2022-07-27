const apiUrl = "https://icanhazdadjoke.com/";
const newJoke = document.getElementById("newJoke");
const scoreOne = document.getElementById("scoreOne");
const scoreTwo = document.getElementById("scoreTwo");
const scoreThree = document.getElementById("scoreThree");
const newScore = document.getElementById("newScore");
const reportJokes = [];

const getNewJoke = () => {
  fetch(`${apiUrl}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (newJoke.textContent = data.joke));
  scoreOne.disabled = false;
  scoreTwo.disabled = false;
  scoreThree.disabled = false;
  newScore.classList.remove("transparent");
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
    const joke = newJoke.textContent;
    const score = 1;
    const d = new Date();
    const date = d.toISOString();

    const newValuation = new valuationJokes(joke, score, date);
    reportJokes.push(newValuation);
    console.log(reportJokes);
    scoreOne.disabled = true;
    scoreTwo.disabled = true;
    scoreThree.disabled = true;
    newScore.classList.add("transparent");
  } else if (e.target.id === "scoreTwo") {
    const joke = newJoke.textContent;
    const score = 2;
    const d = new Date();
    const date = d.toISOString();
    const newValuation = new valuationJokes(joke, score, date);
    reportJokes.push(newValuation);
    console.log(reportJokes);
    scoreOne.disabled = true;
    scoreTwo.disabled = true;
    scoreThree.disabled = true;
    newScore.classList.add("transparent");
  } else if (e.target.id === "scoreThree") {
    const joke = newJoke.textContent;
    const score = 3;
    const d = new Date();
    const date = d.toISOString();
    const newValuation = new valuationJokes(joke, score, date);
    reportJokes.push(newValuation);
    console.log(reportJokes);
    scoreOne.disabled = true;
    scoreTwo.disabled = true;
    scoreThree.disabled = true;
    newScore.classList.add("transparent");
  }
});

const weatherApi =
  "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=097b2f17ba3673c3cc107c3f0f3e001b";

// fetch(`${weatherApi}`)
//   .then((responsive) => responsive.json())
//   .then((data) => {
//     data.main.temp;
//     let actualTemperature = Math.round(data.main.temp);
//     console.log(
//       `La temperatura actual en Barcelona es de ${actualTemperature} grados`
//     );
//   });

const chuckNorrisApi = "https://api.chucknorris.io/jokes/random";
const getNewChuckNorrisJoke = () => {
  fetch(`${chuckNorrisApi}`)
    .then((response) => response.json())
    .then((data) => (newJoke.textContent = data.value));

  scoreOne.disabled = false;
  scoreTwo.disabled = false;
  scoreThree.disabled = false;
  newScore.classList.remove("transparent");
};
