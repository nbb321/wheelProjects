import Vue from 'vue'
import Vuex from 'vuex'
import {getData} from '@/servers/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideList:[]
  },
  mutations: {
    //请求侧边栏数据
    getDatas(state,payload){
      state.sideList=payload;
      console.log(state.sideList)
    }
  },
  actions: {
    getDatas({commit}:any,payload:any){
      return new Promise(async(resolve,reject)=>{
          let data=await getData(payload);
          commit('getDatas',data.data)
      })
     // 9&_156319
  }
  }
})
