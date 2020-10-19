<template>
  <div>
      
      <List :games="availableGames" />
      <h2>Busca tu juego</h2>
      <input type="text" v-model="searchId">
      <ul>
          <li v-for="game in searchByIdGames" :key="game.codigo">
              {{game.codigo}} | {{game.name}} | {{game.stock}} | {{game.price}}
          </li>
      </ul>

      <h2>Cantidad de juegos totales: {{totalStock}}</h2>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import List from '@/components/List'
export default {

    data(){
        return{
            searchId: ""
        }
    },
    components:{
        List
    },
    computed: {
        ...mapGetters(["availableGames", "searchById", "totalStock"]),
        searchByIdGames(){
            return this.searchById(this.searchId)
        }
    }

}
</script>

<style>

</style>