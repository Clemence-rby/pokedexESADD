<template>
  <div class="page">
    <div class="container">
      <div class="gauche">
        <div class="titres">
          <h2 class="id">#{{ pokemonId }} |</h2>
          <h2 class="hp">❤{{ pokemon.hp }}</h2>
          <h1>{{ pokemon.name }}</h1>
        </div>
        <div class="type">
          <div class="type1" v-bind:style="getColor.color1">
            {{ pokemon.types[0] }}
          </div>
          <div class="type2" v-bind:style="getColor.color2">
            {{ pokemon.types[1] }}
          </div>
        </div>
        <div class="taillePoids">
          <div class="taille">{{ pokemon.height }} cm</div>
          <div class="poids">{{ pokemon.weight }} kg</div>
        </div>
        <div class="son">
          <audio class="sound" v-bind:src="pokemon.sound" controls></audio>
        </div>
      </div>
      <div class="droite">
        <div class="imgContainer">
          <img class="imgPokemon" v-bind:src="pokemon.image" />
        </div>
      </div>
       <div class="attaque">
         <h3>Attaques de</h3><h3 v-bind:style="getColor.color1" class="nomAttaque">{{ pokemon.name }}</h3>
      <select name="attaques" id="selectionAttaque">
        <option v-bind:style="getColor.color1" value="attaques" v-for="m in pokemon.attaque" :key="m" class="moves-container">{{m}}</option>
        
      </select>
    </div>
    </div>
   
  </div>
</template>

<style scoped>
html {
  margin: 0;
}

.page {
  margin: 0;
  height: 100vh;
}
.container {
  margin: 0;
}

h1,
h2 {
  font-size: 3rem;
  margin: 0;
  color: rgb(6, 2, 26);
}

.hp {
  color: rgb(253, 104, 104);
  display: inline-block;
  margin-left: 1rem;
}

.id {
  display: inline-block;
}

.titres {
  margin-bottom: 2.3vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/pokeBackground.png);
  background-size: contain;
}

.gauche {
  width: 33%;
  height: 50vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.type {
  display: flex;
  justify-content: center;
}

.type div {
  /* background-color: rgb(15, 8, 43); */
  color: white;
  border-radius: 2rem 2rem 2rem 2rem;
  padding: 0.5vw;
  width: 5vw;
}

.type2 {
  margin-left: 2vw;
  font-weight: bold;
}

.type1 {
  font-weight: bold;
}

.taillePoids {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
}

.taillePoids div {
  background-color: rgb(45, 25, 119);
  color: white;
  border-radius: 2rem 2rem 2rem 2rem;
  padding: 0.5vw;
  width: 5vw;
}

.poids {
  margin-left: 2vw;
}

.son {
  margin-top: 3vh;
}

.droite {
  width: 33%;
  height: 50vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.imgPokemon {
  transform: rotateY(180deg);
  transition: 2s;
}

.imgPokemon:hover {
  transform: rotateY(360deg);
  transition: 2s;
}
.attaque {
  width: 33%;
  height: 50vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

h3 {
 color: #06021A;
 margin: 0;
 display: inline;
 font-size: 2vw;
}

#selectionAttaque {
  color: white;
  width: 35%;
  background-color: #06021A;
  border: none;
  height: 4vh;
  border-radius: 0.2vw;
  text-align: center;
  transition: 0.8s; 
  margin-top: 2vw;

}

#selectionAttaque:hover {
  background-color: rgb(0, 132, 255);
  transition: 0.8s;
  border: none;
}

.nomAttaque {
  width: 50%;
  border-radius: 0.25vw;
  color: white;
}

</style>

<script>
import { PokemonService } from "../services/pokemonService.js";

export default {
  name: "PokemonDetails",
  data() {
    return {
      pokemonId: 0,
      service: new PokemonService(),
      pokemon: {},
    };
  },

  computed: {
    getColor() {
      if (this.pokemon.types != undefined) {
        let colors = [];

        this.pokemon.types.forEach((t) => {
          switch (t) {
            case "bug":
              colors.push("#91c12b");
              break;
            case "poison":
              colors.push("#ab6bc9");
              break;
            case "flying":
              colors.push("#8faadd");
              break;
            case "grass":
              colors.push("#63bc5a");
              break;
            case "fighting":
              colors.push("#cf3f6b");
              break;
            case "ghost":
              colors.push("#5169ae");
              break;
            case "fairy":
              colors.push("#ed90e7");
              break;
            case "ice":
              colors.push("#74cec0");
              break;
            case "normal":
              colors.push("#929ba3");
              break;
            case "fire":
              colors.push("#ff9e54");
              break;
            case "dragon":
              colors.push("#036dc4");
              break;
            case "electric":
              colors.push("#f4d339");
              break;
            case "steel":
              colors.push("#5a8fa3");
              break;
            case "psychic":
              colors.push("#fa727a");
              break;
            case "ground":
              colors.push("#d87843");
              break;
            case "dark":
              colors.push("#5a5365");
              break;
            case "water":
              colors.push("#4f91d7");
              break;
            case "rock":
              colors.push("#c5b78c");
              break;
          }
        });

        return {
          color1: "background-color: " + colors[0],
          color2: "background-color:" + colors[1],
        };
      }
      return "";
    },
  },

  mounted() {
    let route = this.$route;
    this.pokemonId = route.params.id;

    this.service.getPokemon(this.pokemonId).then((p) => {
      this.pokemon = p;
    });
  },
};
</script>
