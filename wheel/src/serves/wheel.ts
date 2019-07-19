import request from '@/utils/request';
//首页
export function wheel(){ 
    return request({
        url:"/v2-car-getMasterBrandList.html?_1563178209611",
        method:"GET"
    })
};
//侧边栏
export function leftNav(payload:any){
    return request({
        url:'/v2-car-getMakeListByMasterBrandId.html?MasterID='+payload+'&_1563196545213',
        method:"GET"
    })
}
//侧边栏详情
export function SerialIDdata(payload:any){
    console.log(payload)
    return request({
        url:'/v2-car-getInfoAndListById.html?SerialID='+payload+'&_1563263888602',
        method:"GET"
    })
}
//详情大图
export function banners(payload:any){
    console.log(payload)
    return request({
        url:'v2-car-getImageList.html?SerialID='+payload+'&_1563263888602',
        method:"GET"
    })
}
