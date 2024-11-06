async function fetchdata() {
  try {
    const pokename = document.getElementById("pokename").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
    if (!response.ok) {
      throw new Error("res");
    }
    const data = await response.json();
    const pokemonS = data.sprites.front_default;
    const imgel = document.getElementById("pokemon");
    imgel.src = pokemonS;
    imgel.style.display = "block";
    imgel.style.width = "200px";
    imgel.style.height = "200px";
  } catch (error) {
    console.log(error);
  }
}