<template>
    <ul class="list">
        <li data-hover="hover">#</li>
        <li v-for="(item,index) in data" 
        :key="index" data-hover="hover" @click="bind(item.value)">{{item.value}}</li>
    </ul>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
    name:"LeftList",
    computed:{
        ...mapState({
            data:state=>state.wheel.data
        })
    },
    methods:{
        bind(val){
            console.log(1)
            this.$store.commit('wheel/changeVal',val)
        }
    }
})
</script>

<style lang="scss">
.list{
    position: fixed;
    z-index: 99;
    position: fixed;
    right: 0;
    top: 20%;
    padding-left: .2rem;
    box-sizing: border-box;
    li{
        list-style: none;
        font-size: .24rem;
        color: #666;
        font-weight: 500;
        padding: .05rem .1rem;
        box-sizing: border-box;
    }
}
</style>

