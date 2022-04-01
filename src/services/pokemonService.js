import axios from "axios";
import { Pokemon } from "../models/pokemon";
// import {Pokemon} from "../models/pokemon.js";

export class PokemonService {
  constructor() {}

  getPokemon(id) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then((response) => {
          //On stock les données json du pokemon dans la variable data
          let pokemonData = response.data;

           //STOCKAGE DES TYPES

          let pokemonType = response.data.types;
          console.log(pokemonType);

          let typeTable = [];

          for (let t = 0; t < pokemonType.length; t++) {
            typeTable.push(response.data.types[t].type.name);
          }

          //STOCKAGE DES ATTAQUES

          let movestab = [];

          let pokemonMoves = response.data.moves;

          for (let m = 0; m < pokemonMoves.length; m++) {
            movestab.push(response.data.moves[m].move.name);
          }

          // Je crée un nouveau pokémon
          let pokemon = new Pokemon();

          // Je lui affecte toutes les propriétés envoyées par l'API
          pokemon.xp = pokemonData.base_experience;
          pokemon.image = pokemonData.sprites.other.dream_world.front_default;
          pokemon.name = pokemonData.name;
          pokemon.height = pokemonData.height;
          pokemon.weight = pokemonData.weight;
          pokemon.description = pokemonData.description;
          pokemon.types = typeTable;
          pokemon.hp = pokemonData.stats[0].base_stat;
          pokemon.sound =
            "https://www.pokebip.com/audio/cris-sl/" + id + ".mp3";
          pokemon.attaque = movestab

          console.log(pokemonData);

          resolve(pokemon);
        })
        .catch((reason) => {
          reject("Erreur lors de la récupération des pokemons" + reason);
        });
    });
  }

  //cette méthode retourne un tableau de pokemons
  getPokemons() {
    return new Promise((resolve, reject) => {
      let pokemons = [];

      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then((response) => {
          let result = response.data.results;
          result.forEach((p) => {
            let substrings = p.url.split("/");
            let id = substrings[substrings.length - 2];

            p.id = id;

            pokemons.push(p);
          });
          resolve(pokemons);
        })
        .catch((reason) => {
          reject("Erreur lors de la récupération des pokemons" + reason);
        });
    });
  }
}
