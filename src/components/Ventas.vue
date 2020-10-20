<template>
  <div>
      <h1>Cantidad de juegos por stock: {{availableGames.length}}</h1>

      <List :games="availableGames" :showButton="true" @sale-product="saleProduct" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import List from '@/components/List'
export default {

   computed: {
        ...mapGetters(["availableGames"]),

    },
    components:{
      List
    },
    methods:{
      ...mapActions(['processSale']),
      saleProduct(paylod){
        // eslint-disable-next-line
        console.log(paylod)
        this.processSale(paylod)
      }
    }

}
</script>

<style>

</style>