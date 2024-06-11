// *****************************
// STARWARS API FETCH
// *****************************

const starWars1 = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

starWars1();

// *****************************
// STARWARS API FETCH WITH AXIOS
// *****************************

const starWars2 = async () => {
  try {
    const res = await axios.get("https://swapi.dev/api/people/1/");
    console.log("RESPONSE", res);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

starWars2();

// *****************************
// DAD JOKES API
// *****************************

const ul = document.querySelector("ul");
const btn = document.querySelector("button");

const getDadJokes = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKE FOR YOU";
  }
};

const addJoke = async () => {
  const jokeText = await getDadJokes();
  const li = document.createElement("li");
  li.append(jokeText);
  ul.append(li);
};

btn.addEventListener("click", addJoke);
