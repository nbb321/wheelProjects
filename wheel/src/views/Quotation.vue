<template>
    <div class="wrapper">
        <div class="header">
            <div class="top">
                <p>可向多个商家咨询最低价,商家及时回复</p>
                <img src="../img/help.png" alt="" @click="show">
            </div>
            <div class="hid" v-if="flag" @click="show">
                <div class="ques">
                    <div class="quesTop">
                        <div>
                            <div class="img" style="background:green;">
                                <img src="../img/安全高效.png" alt="" />
                            </div>
                            <p>安全高效</p>
                        </div>
                        <div>
                            <div class="img" style="background:blue;">
                                <img src="../img/省心省力.png" alt="" />
                            </div>
                            <p>省心省力</p>
                        </div>
                        <div>
                            <div class="img" style="background:red;">
                            <img src="../img/贴心服务.png" alt="" /> 
                            </div>
                            <p>贴心服务</p>
                        </div>
                    </div>
                    <div class="list">
                        <li>私人信息严格保密，最新报价立筹可取</li>
                        <li>足不出户、提交即可获得多家经销商的最低价格</li>
                    </div>
                </div>    
            </div>
            <div class="infor">
                <img :src="dealerArr.details.serial.Picture" alt="" />
                <div class="infoCont">
                    <p>{{dealerArr.details.serial.AliasName}}</p>
                    <p>{{dealerArr.details.market_attribute.year}} {{dealerArr.details.car_name}}</p>
                </div>
                <p><img src="../img/右箭头.png" alt="" style="width:.2rem;height:.2rem"></p>
            </div>
        </div>
        <div class="user">
            <p>个人信息</p>
            <div>
                <p>姓名</p>
                <input type="text" v-model="name" placeholder="请输入您的真实中文名字"> 
            </div>
            <div>
                <p>手机</p>
                <input type="text" v-model="phone" placeholder="请输入您的真实手机号">
            </div>
            <div @click="choose">
                <p>城市</p>
                <div>
                    <p>{{address.val}}</p>
                    <p><img src="../img/右箭头.png" alt="" style="width:.2rem"></p>
                </div>
            </div>
            <button @click="inquiry">询最低价</button>
        </div>
        <City v-if="provinceFlag" :local="local" :cityData="cityData" :carId="dealerArr.details.car_id" :cityFlag="cityFlag" ></City>
        <div class="bom">
            <p>选择报价经销商</p>
            <div class="bomMain" v-for="(item,index) in dealerArr.list" 
            :key="index">
                <input type="radio">
                <div>
                    <p>
                        <i style="font-style:normal">{{item.dealerShortName}}</i>
                        <span>{{item.promotePrice}}万</span>
                    </p>
                    <p>
                        <i style="font-style:normal">{{item.address}}</i>
                        <span>售{{item.saleRange}}</span>
                    </p>
                </div>
            </div>
            <!-- <p>根据您所在城市，同时为您匹配附近右支经销商，货比三家，才有好价</p> -->
        </div>
        <div class="warn" v-if="warnFlag">
            <div>
                <p>{{warn}}</p>
                <button @click="good">好</button>
            </div>
        </div>
        <button class="btn" v-if="btnFlag">询最低价</button>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import City from '@/components/city.vue'

export default Vue.extend({
    name:'quotation',
    data(){
        return {
            flag:false,
            name:'',
            phone:'',
            warn:'请输入您的真实中文名字',
            warnFlag:false,
            btnFlag:false,
            lowPrice:{}
        }
    },
    components:{
        City
    },
    methods:{
        ...mapActions({
            //询问低价
            getDealer:'wheel/getDealer',
            //定位
            getLocal:'wheel/getLocal',
            //省
            getCity:'wheel/getCity'
        }),
        choose(){
            this.$store.commit('wheel/changes',true)
        },
        show(){
            this.flag = !this.flag;
        },
        inquiry(){
            if(this.name === ''){
                this.warn = '请输入您的真实中文名字';
                this.warnFlag = true;
            }else if(this.phone === ''){
                this.warn = '请输入您的真实手机号';
                this.warnFlag = true;
            }else{
                this.warnFlag = false;
            }
        },
        good(){
            this.warnFlag = false;
        }
    },
    computed:{
        ...mapState({
            dealerArr:state=>state.wheel.dealerArr,
            local:state=>state.wheel.local,
            cityData:state=>state.wheel.cityData,
            provinceFlag:state=>state.wheel.provinceFlag,
            cityFlag:state=>state.wheel.cityFlag,
            address:state=>state.wheel.address
        })
    },
    async mounted(){
        let dealer = await this.getDealer();
        let adres = await this.getLocal();
        this.getCity();
        if(this.address.val){
            this.lowPrice.location = this.address.val;
            this.lowPrice.locationid = this.address.id;    
        }else{
            this.lowPrice.location = adres.CityName;
            this.lowPrice.locationid = adres.CityID;  
        }
        this.lowPrice.dealerids = '';
        dealer.list.map((item,index)=>{
            if(index < 3){
                this.lowPrice.dealerids += item.dealerId+','; 
            }
        })
        this.lowPrice.carid = dealer.details.car_id;
        this.lowPrice.mobile = this.phone;
        this.lowPrice.name = this.phone;
        this.lowPrice.carname = dealer.details.market_attribute.year + ' ' + dealer.details.car_name;
        console.log('this.lowPrice',this.lowPrice)
    },
})
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height:100%;
    font-size:4rem;
    overflow: auto;
    background:#ccc;
}
p{
    margin:0;
    font-size: .3rem;
}
.header{
    width:100%;
    position: relative;
    .top{
        height: .6rem;
        line-height: .6rem;
        width: 100%;
        background: #79cd92;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top:0;
        left:0;
        >p{
            color: #fff;
            font-size: .3rem;
            display: inline-block;
            margin-block-start: 0;
            margin-block-end: 0;
        }
        img{
            width: .3rem;
            margin-left: .1rem;
            vertical-align: -9%;
        }
    }
    .hid{
        width:100%;
        height:100%;
        background:rgba(0,0,0,.2);
        position: fixed;
        top:0;
        left:0;
    }
    .ques{
        width: 86%;
        background: #fff;
        border-radius: .15rem;
        margin-top: .8rem;
        position:absolute;
        top:.3rem;
        left:7%;
        .quesTop{
            width:100%;
            padding:.2rem 0;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-around;
            div{
                display: flex;
                height:1rem;
                flex-direction: column;
                align-items: center;
                .img{
                    width: .6rem;
                    height: .6rem;
                    border-radius: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        width:.3rem;
                        height:.3rem;
                        border-radius: 100%;
                    }
                }
                p{
                    font-size: .24rem;
                    margin:0;
                }
            }
        }
        .list{
            width:86%;
            padding:.1rem 0;
            box-sizing: border-box;
            background: #f4f4f4;
            margin:0;
            border-bottom-left-radius: .15rem;
            border-bottom-right-radius: .15rem;
            li{
                list-style: initial;
                margin-left: .1rem;
                font-size: .2rem;
                color: silver;
            }
        }
    }
    .infor{
        margin-top:.6rem;
        width:100%;
        background:#fff;
        padding: .32rem .18rem .24rem;
        height: 2rem;
        box-sizing: border-box;
        display: flex;
        img{
            width: 2.3rem;
            height: 1.41rem;
            border: 1px solid #eee;
            border-radius: 5px;
            margin-right:.2rem;
        }
        .infoCont{
            flex:1;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            p:nth-child(1){
                font-size: .36rem;
                line-height: 1; 
            }
            p:nth-child(2){
                font-size: .32rem;
                line-height: 1.2;
                color: #333;
            }
        }
        >p{
            width:.3rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size:.3rem;
        }
    }
}
.user{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    >p{
        height: .5rem;
        line-height: .5rem; 
        width: 100%;
        background:#ccc;
        padding: 0 .2rem;
        font-size: .24rem;
        color: #666;
        background: #eee;
        box-sizing: border-box;
    }
    div{
        width: 100%;
        font-size: .32rem;
        height: .88rem;
        line-height: .88rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        color: #000;
        padding:0 .2rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        input{
            border:none;
        }
        div{
            flex:1;
            display: flex;
            justify-content: flex-end;
        }
    }
    button{
        font-size: .32rem;
        color: #fff;
        width: 80%;
        background: #3aacff;
        height: .7rem;
        border-radius: .1rem;
        border:none;
        margin:.3rem 0;
    }
}
.bom{
    width:100%;
    display: flex;
    flex-direction: column;
    >p{
        height: .5rem;
        line-height: .5rem; 
        width: 100%;
        background:#ccc;
        padding: 0 .2rem;
        font-size: .24rem;
        color: #666;
        background: #eee;
        box-sizing: border-box;
    }
    .bomMain{
        width:100%;
        height: 1.65rem;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: .26rem .2rem .26rem .54rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        input{
            width: .32rem;
            height: .32rem;
            margin-right:.2rem;
        }
        div{
            flex:1;
            display: flex;
            flex-direction: column;
            p{
                width:100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            p:nth-child(1) i{
                font-size: .3rem;
            }
            p:nth-child(1) span{
                font-size: .24rem;
                color: red;
            }
            p:nth-child(2) i{
                font-size: .24rem;
                color: #a2a2a2;
                max-width: 4.6rem;
            }
            p:nth-child(2) span{
                font-size: .24rem;
                color: #a2a2a2;
            }
        }
    }
}
.warn{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,.2);
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        background:#fff;
        width:5rem;
        height:2rem;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        button{
            width:100%;
            height:.8rem;
            border:none;
            border-top:solid 1px #ccc;
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;
            background:#fff;    
            font-size: 16px;
            color: #007aff;
        }
        p{
            flex:1;
            width:100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
        }
    }
}
.btn{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #3aacff;
    text-align: center;
    font-size: .34rem;
    color: #fff;
    position: fixed;
    bottom:0;
    left:0;
    border:none;
}
</style>

