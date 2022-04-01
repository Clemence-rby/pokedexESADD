<template>
  <div>
    <h1>Who's that pokemon ?</h1>

    <h2>Score:</h2>
    <h3 id="pokemonChoisi"></h3>
    <img class="imgPokemon" v-bind:src="pokemon.image" />
    <button id="pokemon1"></button><button id="pokemon2"></button><button id="pokemon3"></button
    ><button id="pokemon4"></button>
  </div>
</template>
<style scoped></style>
<script>
import { PokemonService } from "../services/pokemonService.js";
import { Pokemon } from "../models/pokemon";

export default {
  name: "BlindTest",
  data() {
    return {
      pokemonId: 0,
      service: new PokemonService(),
      pokemon: {},
    };
  },

  computed: {},

  mounted() {
    let pokemon = new Pokemon();

    // ######## RANDOM #########

    // On randomize le nombre qu'on attribura aux ID + les 3 Fake
    let randomPokemon1 = Math.floor(Math.random() * 100);
    let randomPokemon2 = Math.floor(Math.random() * 100);
    let randomPokemon3 = Math.floor(Math.random() * 100);
    let randomPokemon4 = Math.floor(Math.random() * 100);

    let tableauRandom = [randomPokemon1, randomPokemon2, randomPokemon3, randomPokemon4]
    var randomTableau = Math.floor(Math.random()*tableauRandom.length);
    var pokemonAleatoire = tableauRandom[randomTableau];

    console.log(randomPokemon1, randomPokemon2, randomPokemon3, randomPokemon4);
    console.log(pokemon);

    // On va chercher le nom du pokemon grâce à son ID
    // On les affecte aux bouttons
    document.getElementById("pokemon1").innerHTML = randomPokemon1;
    document.getElementById("pokemon2").innerHTML = randomPokemon2;
    document.getElementById("pokemon3").innerHTML = randomPokemon3;
    document.getElementById("pokemon4").innerHTML = randomPokemon4;

    document.getElementById("pokemonChoisi").innerHTML = pokemonAleatoire;

// ######## QUIZZ #########
    // On vérifie si le choix de l'utilisateur est le bon


        //Pour ça on compare le résultat à pokemonAleatoire

  },
};
</script>
