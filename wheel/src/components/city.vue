<template>
    <div class="wrapper">
        <div class="header">
            <p>自动定位</p>
            <div class="local">
                <p>{{local.CityName}}</p>
            </div>
        </div>
        <div class="wrap">
            <p>省市</p>
            <div class="main">
                <p v-for="item in cityData" 
                :key="item.CityID" 
                @click="choose(item.CityID)">{{item.CityName}}<span><img src="../img/右箭头.png" alt="" style="width:.2rem"></span></p>
            </div>
        </div>
        <Province v-if="cityFlag" />
    </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import Province from './province.vue';

export default Vue.extend({
    name:'city',
    components:{
        Province
    },
    props:{
        local:{
            type:Object,
            value:{}
        },
        cityData:{
            type:Array,
            value:[]
        },
        carId:{
            type:String,
            value:''
        },
        cityFlag:{
            type:Boolean
        }
    },
    methods:{
        ...mapActions({
            //市
            getProvince:'wheel/getProvince',
        }),
        choose(id:any){
            this.$store.commit('wheel/changeFlag',true);
            // this.getProvince({
            //     provinceid:id
            // })
        }
    }
})
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    font-size:.3rem;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    display: flex;
    flex-direction: column;
    >p{
        height: .4rem;
        line-height: .4rem;
        font-size: .24rem;
        padding-left: .2rem;
        background: #f4f4f4;
        box-sizing: border-box;
    }
    .local{
        padding-left: .4rem;
        font-size: .28rem;
        height: .8rem;
        line-height: .8rem;
        background: #fff;
        box-sizing: border-box;
    }
}
.wrap{
    width:100%;
    flex:1;
    >p{
        height: .4rem;
        line-height: .4rem;
        font-size: .24rem;
        padding-left: .2rem;
        background: #f4f4f4;
        box-sizing: border-box;
    }
    .main{
        width: 100%;
        flex:1;
        padding:0 .4rem;
        font-size: .28rem;
        background: #fff;
        box-sizing: border-box;
        p{
            border-bottom: 1px solid #eee;
            height: .8rem;
            line-height: .8rem;
            width:100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
}
</style>

