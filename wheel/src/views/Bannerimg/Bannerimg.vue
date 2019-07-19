<template>
    <div class="wrap">
        <div class="top">
            <span>颜色</span>
            <span>车款</span>
        </div>
        <div class="bannerImg">
            <div class="bigItme" v-for="(item,index) in bannersList" :key="index">
                <div v-for="(x,y) in item.List" :key="y" class="imngItem" @click="clickSwiper">
                    <img :src="x" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import {mapActions,mapState} from 'vuex';
export default {
     computed:{
         ...mapState({
            bannersList:(state:any)=>state.wheel.bannersList
           
        })
    },
    methods:{
        clickSwiper(){
            this.$router.push('/swiperPaage')
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(244,244,244);
  .top{
      width: 100%;
      height: .5rem;
      line-height: .5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      background: #fff;
      border-bottom: 1px solid #ccc;
      span{
          width: 50%;
          height: 100%;
          display: inline-block;
      }
  }
  .bannerImg{
      width: 100%;
      flex:1;
      display: flex;
      flex-direction: column;
      .bigItme{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        
      }
      .imngItem{
          width: 33%;
          height: 1.1rem;
          overflow: hidden;
          margin-top: .03rem;
          img{
              width: 100%;
              height: 100%;
          }
      }
  }
  }
</style>
