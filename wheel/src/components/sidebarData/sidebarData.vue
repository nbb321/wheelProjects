<template>
  <div id="wrap">
      <div class="left" v-for="(item,index) in sideList" :key="index">
          <!-- {{sideList}} -->
        <div class="title">{{item.GroupName}}</div>
        <ul class="list">
            <li v-for="(x,y) in item.GroupList" :key="y">
                <img :src="x.Picture" alt="">
                <div>
                    <h3>{{x.AliasName}}</h3>
                    <p>{{x.DealerPrice}}</p>
                </div>
            </li>
        </ul>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props:["sideList","visible"],
  created(){
   
  },
  components: {

  },
  methods:{
     
  }
});
</script>
<style lang="scss">
#wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

}
.active{
  width: 80%;
  height: 100%;
  transition: left linear .1s;
}
.left{
    width: 100%;
    .title{
        width: 100%;
        height: 30%;
        line-height: 30px;
        background: #efefef;
        color: rgb(113,113,133);
        padding-left: 10px;
        display: inline-block;
    }
    .list{
        width: 100%;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        li{
            width: 100%;
            padding: 5px;
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 100px;
                height:70px;
                margin-right: 10px;
            }
            div{
                flex:1;
                h3{
                    color: rgb(113,113,133);
                    font-weight: normal;
                }
                p{
                    color: red;
                }
            }
        }
    }
}
</style>

