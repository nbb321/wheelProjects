<template>
  <div class="context">
    <div v-for="(item,index) in list" :key="index">
    <p>{{item.exhaust_str}}/{{item.max_power_str}}</p>
    <div class="context-list">
      <div>{{item.market_attribute.year}}款{{item.car_name}}</div>
      <span>{{item.horse_power}}玛丽{{item.gear_num}}{{item.trans_type}}</span>
      <p> 
        <span>指导价{{item.market_attribute.official_refer_price}}</span>
        <span>{{item.market_attribute.dealer_price_min}}起</span>
      </p>
      <button>{{BottomEntranceTitle}}</button>
    </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["BottomEntranceTitle","list"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
   
  }
});
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
.context {
  > p {
    font-size: 0.15rem;
    height: 0.3rem;
    padding: 0.1rem;
    display: flex;
    align-items: center;
    color: $spell-color;

  }
  .context-list {
    padding: 0.1rem 0.1rem 0;
    
    background: #fff;
    div {
      margin-bottom: 0.05rem;
    }
    > span {
      font-size: 0.15rem;
      color: $spell-color;
    }
    > p {
      text-align: right;
      margin-top: 0.05rem;

      span:first-child {
        font-size: 0.14rem;
        color: #818181;
        font-weight: 500;
        padding-right: 0.1rem;
      }
      span:nth-child(2) {
        font-size: 0.16rem;
        color: $price-color;
      }
    }
    button{
        border-top: 1px solid #eee;
        margin-top: 0.1rem;
        width: 100%;
        height: 0.4rem;
        background: #fff;
        color:$button-background-color ;
    
    }
  }
}
</style>