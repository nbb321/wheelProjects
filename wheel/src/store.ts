import Vue from 'vue'
import Vuex from 'vuex'
import {getData,wheel,SerialIDdata} from '@/server/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideList:[],
    carsDate:[],
    list:[],
    data:[],
    leftFlag:false,
    val:'A'
  },
  mutations: {
       //首页所有汽车
       upCars(state:any,payload:any){
        payload.map((item:any) =>{
            let key = item.Spelling.substring(0,1);
            if(state.data.filter((items:any)=>items.value===key).length === 0){
                state.data.push({
                    value:key,
                    id:key,
                    child:[]
                })
            }
            state.data.map((items:any,index:any)=>{
                if(item.Spelling.substring(0,1)===items.value){
                    state.data[index].child.push(item);
                }
            })
        })
        console.log('state.data...',state.data)
        return state.data;
    },
    //侧边栏
    changeLeft(state:any,payload:boolean){
        return state.leftFlag = payload
    },
    //请求侧边栏数据
    getDatas(state:any,payload:any){
      state.sideList=payload;
      console.log(state.sideList)
    },
    changeVal(state:any,payload:any){
      return state.val = payload;
  }
  },
  actions: {
    getDatas({commit}:any,payload:any){
      return new Promise(async(resolve,reject)=>{
          let data=await getData(payload);
          commit('getDatas',data.data)
      })
  },
   //首页所有汽车
   async getHome({commit}:any,payload:any ) {
    let data = await wheel();
    console.log('data...',data.data)
    commit('upCars',data.data)
  },
  //侧边栏详情

  async SerialIDdata({commit}:any,payload:any ) {
    let data = await SerialIDdata(payload);
    console.log('data...',data.data)
    // commit('upCars',data.data)
  },
  }
})
