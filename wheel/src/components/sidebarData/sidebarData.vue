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
@-webkit-keyframes wraps
{
from {width: 0;}
to {width: 75%;}
}

#wrap{
    width: 75%;
    height: 100%;
    position: fixed;
    top:0;
    right:0;
    animation: wraps 3s;
    overflow-y: auto;
}
.left{
    width: 100%;
    display: flex;
    flex-direction: column;
    .title{
        width: 100%;
        height:0.5rem;
        line-height:0.5rem;
        background: #efefef;
        color: rgb(113,113,133);
        padding-left: .1rem;
        display: inline-block;
        font-size: .28rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
    .list{
        flex:1;
        width: 100%;
        padding: .1rem 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        li{
            width: 100%;
            padding: .5rem;
            box-sizing: border-box;
            border-bottom: 0.01rem solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 100px;
                height:.7rem;
                margin-right: .1rem;
            }
            div{
                flex:1;
                font-size: .3rem;
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

