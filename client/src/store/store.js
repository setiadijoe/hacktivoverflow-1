import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    accessToken
  },
  mutations: {
    increaseScore(state, payload) {
      state.accessToken = payload
    }
  }
})

export default store