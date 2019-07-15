import { wheel, leftNav } from '@/serves/wheel'

const state = {
    carsDate:[],
    list:[],
    data:[],
    leftFlag:false,
    val:'A'
};

const mutations = {
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
    //侧边栏数据
    upLeft(state:any,payload:any){
        return state.carsDate = payload;
    },
    changeVal(state:any,payload:any){
        return state.val = payload;
    }
};

const actions = {
    //首页所有汽车
    async getHome({commit}:any,payload:any ) {
        let data = await wheel();
        console.log('data...',data.data)
        commit('upCars',data.data)
    },
    //侧边栏
    async getNav({commit}:any,payload:any){
        console.log('payload',payload)
        let data = await leftNav(payload);
        console.log('侧边栏...',data)
        commit('upLeft',data.data)
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}