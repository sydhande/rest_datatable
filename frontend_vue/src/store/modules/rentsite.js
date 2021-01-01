
import RentsitesData from "../../api/RentsitesData"

const state = () => ({
    rentsites: [],
    totalRentsites: 0
})

const getters= {
    rentsites: (state) => state.rentsites,
    totalRentsites: (state) => state.totalRentsites
}

const mutations= {
    SET_Rentsites(state, rentsitesdata) {
      state.rentsites = rentsitesdata.results;
      state.totalRentsites = rentsitesdata.count;
      console.log("count",state.totalRentsites)
    }
}

const actions = {
    getRentsites({ commit }, payload) {
      return new Promise((resolve, reject) =>{
        RentsitesData.getAll(payload)
        .then(response => {
          commit('SET_Rentsites', response.data);
          console.log(response.data);
          resolve()
        })
        .catch(e=> {
          console.log(e,reject)
        })
      })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}