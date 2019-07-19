<template>
    <div class="mosk" v-if="leftFlag">
        <div class="leftMain" v-for="(item,index) in carsDate" 
        :key="index">
            <p>{{item.GroupName}}</p>
            <div class="mainBox">
                <div class="left" v-for="items in item.GroupList" 
                :key="items.SerialID" @click="ClickID(items.SerialID)">
                    <img :src="items.Picture" alt="" />
                    <div class="boxLeft">
                        <p>{{items.AliasName}}</p>
                        <p>{{items.DealerPrice}}</p>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend ({
    name:"LeftMosk",
    computed:{
        ...mapState({
            carsDate:state=>state.wheel.carsDate,
            leftFlag:state=>state.wheel.leftFlag
        })
    },
    methods:{
        ClickID(SerialID){
            console.log(SerialID);
            this.$store.dispatch('wheel/SerialIDdata',SerialID);
            this.$router.history.push("/serialdata")
        }
    }
})
</script>

<style lang="scss">
.mosk{
    width: 75%;
    height:100%;
    position: fixed;
    top: 0;
    right: 0;
    transition: all .2s ease;
    background: #fff;
    z-index: 100;
    height: 100%;
    box-shadow: 0 0 0.5rem #eee;
    overflow-y: scroll;
    .leftMain{
        width:100%;
        display: flex;
        flex-direction: column;
        >p{
            font-size: .16rem;
            line-height: .3rem;
            background: #f4f4f4;
            padding-left: .15rem;
            color: #aaa;
            margin:0;
        }
        .mainBox{
            width:100%;
            display: flex;
            flex-direction: column;
            padding:0 .1rem;
            box-sizing: border-box;
            .left{
                width:100%;
                height: .8rem;
                border-bottom: 1px solid #ddd;
                display: flex;
                align-items: center;
                justify-content: space-between;
                img{
                    margin: 0 .05rem 0 .02rem;
                    width: .9rem;
                    height: .6rem;
                }
                .boxLeft{
                    height: 100%;
                    flex:1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    p{
                        margin:0;
                    }
                    p:nth-child(1){
                        font-size: .16rem;
                        color: #5f687a; 
                    }
                    p:nth-child(2){
                        // margin-top: .1rem;
                        font-size: .16rem;
                        color: red;
                    }
                }
            }
        }
    }
}
</style>

