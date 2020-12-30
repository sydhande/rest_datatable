import Vue from 'vue'
import Vuex from 'vuex'
import RentsitesData from "../api/RentsitesData";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rentsites: []
  },
  mutations: {
    SET_Rentsites(state, rentsitesdata) {
      state.rentsites = rentsitesdata;
    }

  },
  actions: {
    getRentsites({ commit }) {
      RentsitesData.getAll()
      .then(response => {
        commit('SET_Rentsites', response.data);
        console.log(response.data);
      })
      .catch(e=> {
        console.log(e)
      })

     
    }
  },
  modules: {
  }
})
