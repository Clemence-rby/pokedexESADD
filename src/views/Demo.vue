<template>
    <div class="body">
        <h1>Salut à toi, dresseur !</h1>
        <img alt="Vue logo" src="../assets/Sacha.png" class="imgDresseur">
        <p>
            {{maVariable}}
        </p>
        <input type="text" v-model="firstName">

        <br>
        <span v-if="firstName != ''">
            Holà {{firstName}}
        </span>
        <span v-else>Rentre ton prénom</span>
        <br>

        <button v-on:click="direBonjour"> Valider </button>
        <br>
        <h2>Pokedex</h2>
        <div class="tablePoke">
            <table>
                <tr>
                    <td class="tableTitle">
                        <p>Nom</p>
                    </td>
                    <td class="tableTitle">
                        <p>Id</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p v-for="(p, index) in pokemons" v-bind:key="index">
                            <router-link class ="lienNom" v-bind:to="'/pokemons/' + p.id">{{p.name}}</router-link>
                            
                        </p>
                    </td>
                    <td>
                        <p v-for="(p, index) in pokemons" v-bind:key="index">
                            {{p.id}}
                        </p>
                    </td>
                </tr>
            </table>
        </div>



    </div>
</template>

<!-- Vise juste les élément de la page plutôt que toutes les pages -->
<style scoped>

    .body {
        background-image: url(../assets/background.jpg);

    }

    .imgDresseur{
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

    h2{
        font-size: 3rem;
    }

    .lienNom {
        text-decoration: none;
        color: rgb(36, 36, 36);
        font-weight: bold;
    }
</style>

<script>
    import {
        PokemonService
    } from '../services/pokemonService.js'
    
    export default {
        name: 'Demo',
        //Variable qui stocke les variables pour les invoquer plus tard.
        data() {
            //Cette fonction sera appelée lorsque le composat est créé.
            return {
                maVariable: "Prêt pour une nouvelle aventure ?",
                compteur: 0,
                firstName: "",
                pokemons: [],
                service: new PokemonService()
            }
        },

        //Obligatoire pour les v-on (au moins)
        methods: {
            direBonjour() {
                alert("Holà " + this.firstName)
            }
        },

        mounted() {
            //Cette fonction sera appelée lorsque le composant est prêt à l'emploi.
            setInterval(() => {
                this.compteur++
            }, 1000)

            this.service.getPokemons()
            .then(pokemons => {
                this.pokemons = pokemons;


            })
        }

    }
</script>