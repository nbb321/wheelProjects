<template>
  <div class="home">
    <button @click="clickShow">点击</button>
      <div v-if="visible" id="lefts" :class="visible===true?'active':''">
        <sidebarData :visible="visible" :sideList="sideList"></sidebarData>
      </div>
    </div>
</template>

<script lang="ts">
import sidebarData from "@/components/sidebarData/sidebarData.vue"
import Vue from 'vue';
import {mapActions,mapState} from "vuex";
import { Drawer, Button } from 'antd';
export default Vue.extend({
  data(){
    return{
       visible: false
    }
  },
  created(){
    let obj={
      MasterID:9,
      ids:"_156319"
    }
    this.getDatas(obj)
  },
  computed:{
    ...mapState(["sideList"])
  },
  components: {
    sidebarData
  },
  methods:{
     ...mapActions({
       getDatas:"getDatas"
    }),
    clickShow(){
      this.visible=true
    }
    // showDrawer(){
    //     this.visible=true
    // },
    // onClose(){
    //  this.visible=false
    // }
  }
});
</script>
<style lang="scss">
.active{

    animation: all 1s;
}

</style>

