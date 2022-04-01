<template>
  <div class="conteneur">
    <div v-for="(p, index) in pokemons" v-bind:key="index">
      <router-link id="pokemon" v-bind:to="'/pokemons/' + p.id">
        <img class="sprite" v-bind:src="p.sprite" alt="" />
      </router-link>
    </div>
  </div>
</template>

<!-- Vise juste les élément de la page plutôt que toutes les pages -->
<style scoped>

.conteneur {
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  
}

.imgDresseur {
  width: 10%;
}

.tablePoke {
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

table {
  width: 50%;
  background-color: rgb(236, 236, 236);
}

.tableTitle {
  background-color: rgb(36, 36, 36);
  color: white;
}

h2 {
  font-size: 3rem;
}

.lienNom {
  text-decoration: none;
  color: rgb(36, 36, 36);
  font-weight: bold;
}

.sprite {
    max-width: 10vw;
}

</style>

<script>
import { PokemonService } from "../services/pokemonService.js";

export default {
  name: "Demo",
  //Variable qui stocke les variables pour les invoquer plus tard.
  data() {
    //Cette fonction sera appelée lorsque le composat est créé.
    return {
      maVariable: "Prêt pour une nouvelle aventure ?",
      compteur: 0,
      firstName: "",
      pokemons: [],
      service: new PokemonService(),
    };
  },

  //Obligatoire pour les v-on (au moins)
  methods: {
    direBonjour() {
      alert("Holà " + this.firstName);
    },
  },

  mounted() {
    //Cette fonction sera appelée lorsque le composant est prêt à l'emploi.
    setInterval(() => {
      this.compteur++;
    }, 1000);

    this.service.getPokemons().then((pokemons) => {
      this.pokemons = pokemons;
    });
  },
};
</script>
