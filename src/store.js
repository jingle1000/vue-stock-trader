import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: [
      {
        symbol: "MSFT",
        name: "Microsoft",
        price: 100.01
      },
      {
        symbol: "ORCL",
        name: "Oracle",
        price: 63.44,
      },
      {
        symbol: "ROK",
        name: "Rockwell Automation",
        price: 210.89
      },
      {
        symbol: "AME",
        name: "Ametek Inc",
        price: 30.20,
      }
    ],
    userPurchases: [],
    userFunds: 0.00
    
  },
  mutations: {
    addUserFunds(state, n) {
      state.userFunds += n;
    }
  },
  actions: {
    addStock(context, data) {
      context.state.userPurchases.push(data);
    }
  }
})
