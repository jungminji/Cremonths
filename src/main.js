// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    amount: 0,
    installmentMonth: 0,
    rate: 0
  },
  mutations: {
    AMOUNT (state, payload) {
      state.amount = payload
    },
    MONTH (state, payload) {
      state.installmentMonth = payload
    },
    RATE (state, payload) {
      state.rate = payload
    }
  },
  actions: {
    updateAmount (context, payload) {
      // calls AMOUNT mutations to update the state.amount
      context.commit('AMOUNT', payload.amount)
    },
    updateMonth (context, payload) {
      context.commit('MONTH', payload.month)
    },
    updateRate (context, payload) {
      context.commit('RATE', payload.rate)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
