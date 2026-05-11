// fetch = function used for making HTTP requests or fetch resources.
// JSON style data, iamges, files
// simplifies async data fetching in JavaScript and
// used for interacting with APIs to retreive an send data
// async over the web
// feetch (url, {options})

// this is one way to do it

//fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//.then(response => {
//    if(!response.ok){
//        throw new Error("Could not fetch resource");
//     }
//    return response.json();
//})
//.then(data => console.log(data))
//.catch(error => console.log(error));

// if you want to use async and await (I think this is more readable)

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        const errorText = document.getElementById("errorText");
        errorText.textContent = `That is not a Pokemon`;
    }
}