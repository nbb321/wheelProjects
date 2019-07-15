import request from "@/utils/request"

export function getData(params:any){
    console.log(params)
    return request({
        url:'v2-car-getMakeListByMasterBrandId.html?MasterID='+params.MasterID+'&'+params.ids,
        method:'GET'
    })
}