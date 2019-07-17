import request from '@/utils/request.ts';
//首页车系
export function wheel(){
    return request({
        url:"/v2-car-getMasterBrandList.html?_1563178209611",
        method:"GET"
    })
};
//侧边栏车系
export function leftNav(payload:any){
    return request({
        url:'/v2-car-getMakeListByMasterBrandId.html?MasterID='+payload+'&_1563196545213',
        method:"GET"
    })
}
//询问低价
export function dealer(){
    return request({
        url:'/v2-dealer-alllist.html?carId=131315&cityId=201&_1563276502540',
        method:"GET"
    })
}
//定位
export function local(){
    return request({
        url:'/location-client.html?_1563276651487',
        method:"GET"
    })
}
//省
export function city(){
    return request({
        url:'/v1-city-alllist.html?_1563276655185',
        method:"GET"
    })
}
//市
export function province(params:any){
    return request({
        url:'/v1-city-alllist.html?provinceid='+params.provinceid+'&_1563276758695',
        method:"GET"
    })
}
//提交
export function submiss(params:any){
    // console.log('params',params)
    return request({
        url:'/h2-submit-lowprice.html?carid='+params.carid+'&carname='+params.carname+'&cl_from='+params.cl_from+
        '&dealerids='+params.dealerids+'&flag='+params.flag+'&location='+params.location+'&locationid='+params.locationid+
        '&mobile='+params.mobile+'&name='+params.name+'&openUDID='+params.openUDID+'&ordertypeid='+params.ordertypeid+
        '&ordertypeid='+params.ordertypeid+'&os='+params.os,
        method:'GET'
    })
}