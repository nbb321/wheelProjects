<template>
    <div class="wrapper">
        <div class="wrap">
            <p v-for="item in provinceData" 
            :key="item.CityID" 
            @click="save(item.CityName,item.CityID)">{{item.CityName}}</p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

export default Vue.extend({
    name:'province',
    computed:{
        ...mapState({
            provinceData:state=>state.wheel.provinceData
        })
    },
    methods:{
        ...mapMutations({
            saveRes:'wheel/saveRes'
        }),
        save(val,carId){
           this.saveRes({
               val:val,
               id:carId
            });
            this.$store.commit('wheel/changes',false)
            this.$store.commit('wheel/changeFlag',false);
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
    z-index: 9999;
    background:rgba(0,0,0,.3);
    .wrap{
        width:75%;
        height:100%;
        position: fixed;
        top:0;
        right:0;
        background:#fff;
        p{
            padding-left: .3rem;
            font-size: .28rem;
            height: .8rem;
            line-height: .8rem;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            margin-left: .1rem;
        }
    }
}
</style>

