import request from '../utils/request';

//获取所有汽车数据
export function getCardata (){
    return request({
        url: '/v2-car-getMasterBrandList.html?_1563179597997',
        method: 'GET',
        
    })
}