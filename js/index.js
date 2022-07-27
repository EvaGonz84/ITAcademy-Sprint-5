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

document.getElementById("start-button").addEventListener("click", getNewJoke);

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
