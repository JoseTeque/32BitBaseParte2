<template>
  <div>
      <h1>TOTAL DE VENTAS</h1>
      <h2>Tus juegos Comprados</h2>
      <ul>
        <li v-for="(value, name) in totalgamesSold" :key="name">
          {{name}}:  {{value}}
        </li>
      </ul>

      <h2>VENTAS TOTALES: </h2>
      <ul>
        <li  v-for="venta in sales" :key="venta.codigo">
         Codido: {{venta.codigo}} | Nombre: {{venta.name}} | Precio: {{venta.price}}
        </li>
      </ul>

      <h2>Monto total: ${{totalAmount}}</h2>
  </div>
</template>

<script>
 import { mapGetters,mapState } from 'vuex';
export default {
 
  computed:{
    ...mapGetters(["totalgamesSold", "totalAmount"]),
    ...mapState(["sales"]),
  }

}
</script>

<style>

</style>