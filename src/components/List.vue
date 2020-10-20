<template>
  <div>
       <ul>
          <li v-for="game in games" :key="game.codigo" :style="{backgroundColor: game.color}">
             {{game.codigo}} | {{game.name}} | {{game.stock}} | {{game.price}}
             <button v-if="showButton" @click="saleProduct(game)" >Vender</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: [
        "games",
        "showButton"
    ],
    methods:{
        saleProduct(game){
            this.$emit("sale-product", game)
        }
    }
}
</script>

<style>

</style>