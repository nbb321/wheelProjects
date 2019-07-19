import request from "@/utils/request"

export function getData(params:any){
    console.log(params)
    return request({
        url:'v2-car-getMakeListByMasterBrandId.html?MasterID='+params.MasterID+'&'+params.ids,
        method:'GET'
    })
}
export function wheel(){
    return request({
        url:"/v2-car-getMasterBrandList.html?_1563178209611",
        method:"GET"
    })
};
//侧边栏详情
export function SerialIDdata(payload:any){
    console.log(payload)
    return request({
        url:'/v2-car-getInfoAndListById.html?SerialID='+payload+'&_1563263888602',
        method:"GET"
    })
}