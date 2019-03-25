import Vue from 'vue'
import Vuex from 'vuex'
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';

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
      console.log(data);
      function checkStocks(purchases) {
        for (let i = 0; i < purchases.length; i++) {
          if (purchases[i].stock.name == data.stock.name) {
            let currentQuantity = parseFloat(purchases[i].quantity);
            let toAdd = parseFloat(data.quantity);
            purchases[i].quantity = currentQuantity + toAdd;
            return true;
            break;
          }
        }
        return false;
      } 
      if (!checkStocks(context.state.userPurchases)) {
        context.state.userPurchases.push(data);
      }
    }
  }
})
