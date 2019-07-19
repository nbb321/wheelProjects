import { wheel, leftNav, SerialIDdata, banners } from '@/serves/wheel'

const state = {
    carsDate: [],
    list: [],
    data: [],
    leftFlag: false,
    val: 'A',
    serialList: {},
    serialLists: {},
    yearList: [],
    datayears: ["全部"],
    bannersList: [],
    moCan: [],
    datas:[],
    Count:"",
    activeIndexs:""
};

const mutations = {
    activeIndexs(state: any, payload: any){
        state.activeIndexs=payload
    },
    //首页所有汽车
    upCars(state: any, payload: any) {
        payload.map((item: any) => {
            let key = item.Spelling.substring(0, 1);
            if (state.data.filter((items: any) => items.value === key).length === 0) {
                state.data.push({
                    value: key,
                    id: key,
                    child: []
                })
            }
            state.data.map((items: any, index: any) => {
                if (item.Spelling.substring(0, 1) === items.value) {
                    state.data[index].child.push(item);
                }
            })
        })
        return state.data;
    },
    //侧边栏
    changeLeft(state: any, payload: boolean) {
        return state.leftFlag = payload
    },
    //侧边栏数据
    upLeft(state: any, payload: any) {
        return state.carsDate = payload;
    },
    changeVal(state: any, payload: any) {
        return state.val = payload;
    },
    //详情
    SerialIDdata(state: any, payload: any) {
        let years = payload.list.map((item: any) => {
            return item.market_attribute;
        })
        state.datayears = ["全部"];
        years.forEach((item: any) => {
            state.datayears.push(item.year)
        })
        state.datayears = Array.from(new Set(state.datayears))
        state.datas = payload;
        state.serialList = payload.list;
        state.serialLists = payload.list;
    },
    //详情图片
    banners(state: any, payload: any) {
        payload.forEach((item:any)=>{
            state.Count=item.Count
        })
        console.log(state.Count)
        state.bannersList = payload;
        console.log("bannersList",payload)
    },
    //点击年切换数据
    tabData(state: any, payload: any) {       
        if (payload === "全部") {
            state.serialList = state.serialLists;
            return false
        } 
        state.serialList =  state.serialLists.filter((item: any) =>
            item.market_attribute.year === payload)
    }
};

const actions = {
    //首页所有汽车
    async getHome({ commit }: any, payload: any) {
        let data = await wheel();
        commit('upCars', data.data)
    },
    //侧边栏
    async getNav({ commit }: any, payload: any) {
        let data = await leftNav(payload);
        commit('upLeft', data.data)
    },
    //侧边栏详情
    async SerialIDdata({ commit }: any, payload: any) {
        let data = await SerialIDdata(payload);
        // console.log('侧边栏',data.data)
        commit('SerialIDdata', data.data)
    },
    //详情图片
    async banners({ commit }: any, payload: any) {
        let data = await banners(payload);
        data.data.map((item: any) => {
            item.List = item.List.map((val: any) => {
                return val.Url.replace(/\{0}/g, 3)
            })
            return item.List
        })
        commit('banners', data.data)
    },

};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}