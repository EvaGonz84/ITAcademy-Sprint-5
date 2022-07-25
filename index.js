const apiUrl = "https://icanhazdadjoke.com/";
const newJoke = document.getElementById("newJoke");

const getNewJoke = () => {
  fetch(`${apiUrl}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (newJoke.textContent = data.joke));
};

document.getElementById("start-button").addEventListener("click", getNewJoke);
