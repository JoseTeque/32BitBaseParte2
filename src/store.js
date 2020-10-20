import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "32BITS",
    subtitle: "Juegos de PC y Consola",
    menu: "",
    games: [
      {
        codigo: "0001",
        name: "Sekiro",
        stock: 100,
        price: 30000,
        color:"red",
        outstanding:true
      },
      {
        codigo: "0002",
        name: "Fifa 21",
        stock: 100,
        price: 25000,
        color:"blue",
        outstanding:false
      },
      {
        codigo: "0003",
        name: "Gears of War 4",
        stock: 100,
        price: 15000,
        color:"green",
        outstanding:true
      },
      {
        codigo: "0004",
        name: "Mario tennis Aces",
        stock: 100,
        price: 35000,
        color:"yellow",
        outstanding:false
      },
      {
        codigo: "0005",
        name: "Bloodborne",
        stock: 100,
        price: 10000,
        color:"blue",
        outstanding:false
      },
      {
        codigo: "0006",
        name: "Forza Horizon 4",
        stock: 100,
        price: 20000,
        color:"red",
        outstanding:true
      }
    ],
    sales: []
  },
  getters: {
    availableGames(state){
      return state.games.filter(game => game.stock > 0);
    },
    searchById: (_state, getters) => codigo =>  getters.availableGames.filter(game => game.codigo == codigo),
    totalStock(state){
      return state.games.reduce((acc, game) => acc + game.stock, 0)
    },
    totalgamesSold(state){
      let games = state.sales.map(game => game.name)

      return  games.reduce((r,c) => (r[c] = (r[c] || 0) + 1, r), {})
    },
    totalAmount(state){
      return state.sales.reduce((acc,game) => acc + game.price,0)
    }
  },
  mutations: {
    ADD_SALE(state, product){
      state.sales.push(product)
    },
    REMOVE_FROM_STOCK(state,game){
      let prod = state.games.find(p => p.codigo === game.codigo)
      prod.stock -=1;
    }
  },
  actions: {
    processSale({commit},game){
      setTimeout(() => {
        commit("REMOVE_FROM_STOCK", game)
        setTimeout(() => {
          commit("ADD_SALE",game)
          alert("VENTA PROCESADA")
        }, 2000)
      },3000)
    }
  }
});

export default store;
