<template>
  <div class="wrap">
    <div class="img" @click="clcikImgs(datas.SerialID)">
        <img :src="datas.CoverPhoto" alt="">
    </div> 
    <div class="info">
      <div class="info-cont" v-if="datas.market_attribute">
        <p>{{datas.market_attribute.dealer_price}}</p>
        <p>指导价：{{datas.market_attribute.official_refer_price}}</p>
      </div>
      <div class="info-btn">
        <button>{{datas.BottomEntranceTitle}}</button>
      </div>
    </div>
    <div class="car-list">
      <div class="car-nav">
        <span :class="i===index?'active':''" v-for="(item,index) in datayears" :key="index"
         @click="clickColor(item,index)">{{item}}</span>
      </div>
      <cardetail :BottomEntranceTitle="datas.BottomEntranceTitle" :list="serialList"></cardetail>
    </div>
    <div class="flex-column">
        <p>{{datas.BottomEntranceTitle}}</p>
        <p>本地经销商为你报价</p>
    </div>
  </div>
</template>

<script lang="ts">
import {mapActions,mapState} from 'vuex';
import cardetail from '@/components/cardetail/cardetail.vue';
import Vue from "vue";
export default Vue.extend({
  name: "CarListDetail",
  props: {},
  data(){
    return{
      i:0
    }
  },
  components: {
      cardetail
  },
  computed:{
         ...mapState({
            datas:(state:any)=>state.wheel.datas,
            serialList:(state:any)=>state.wheel.serialList,
            datayears:(state:any)=>state.wheel.datayears,
        })
    },
  methods:{
        clcikImgs(id:any){
          this.$store.dispatch('wheel/banners',id);
          this.$router.push('/bannerimg')
        },
        //点击年
        clickColor(item:any,index:any){
          this.i=index; 
          this.$store.commit('wheel/tabData',item);
        }
    }
});
</script>
<style scoped lang="scss">
@import "@/scss/global.scss";
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .active{
    color:$button-background-color
  }
  .img {
    height: 2.2rem;
    background: pink;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    height: 0.8rem;
    background: #fff;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info-cont {
      width: 45%;
      p:first-child {
        font-size: 0.2rem;
        color: $price-color;
        font-weight: 500;
      }
      p:nth-child(2) {
        color: $spell-color;
      }
    }
    .info-btn {
      width: 50%;
      button {
        background: $button-background-color;
        color: #fff;
        width: 100%;
        height: 0.4rem;
        border-radius: 0.05rem;
      }
    }
  }
  .car-list {
    flex: 1;
    margin-top: .1rem;
    overflow-y: auto;
    .car-nav {
      height: 0.4rem;
      background: #fff;
      display: flex;
      align-items: center;
      padding: 0.1rem;
      span {
        padding-right: 0.2rem;
      }
    }
  }
  .flex-column{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.5rem;
      background:$button-background-color;
      display: flex;
      flex-direction: column;
      align-items: center;
      p{
          color: #fff;
      }
      p:first-child {
        font-size: 0.16rem;
        margin-top: 0.05rem;;
      }
      p:nth-child(2) {
        font-size: 0.14rem;
      }
  }
}
</style>
