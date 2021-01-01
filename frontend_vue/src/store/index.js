import Vue from 'vue'
import Vuex from 'vuex'
import rentsite from './modules/rentsite'
//import RentsitesData from "../api/RentsitesData";

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   rentsites: [],
  //   totalRentsites: 0
  // },
  
  // getters: {
  //   rentsites: (state) => state.rentsites,
  //   totalRentsites: (state) => state.totalRentsites
  // },

  // mutations: {
  //   SET_Rentsites(state, rentsitesdata) {
  //     state.rentsites = rentsitesdata.results;
  //     state.totalRentsites = rentsitesdata.count;
  //     console.log("count",state.totalRentsites)
  //   }

  // },
  // actions: {
  //   getRentsites({ commit }, payload) {
  //     return new Promise((resolve, reject) =>{
  //       RentsitesData.getAll(payload)
  //       .then(response => {
  //         commit('SET_Rentsites', response.data);
  //         console.log(response.data);
  //         resolve()
  //       })
  //       .catch(e=> {
  //         console.log(e,reject)
  //       })
  //     })
  //   }
  // },
  modules: {
    rentsite
  }
})
