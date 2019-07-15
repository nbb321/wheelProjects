import Vue from 'vue'
import Vuex from 'vuex'
import {getCardata} from '@/services/index'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      carsdata: null
  },
  mutations: {
      
  },
  actions: {
    getcardata({state}, payload) {
      return new Promise(async (resolve, reject) => {
            let cars = await getCardata()
            // console.log('cars...',cars)
            state.carsdata = cars.data
            // console.log('payload...',state)
            resolve(cars)
      })
    }
  }
})
