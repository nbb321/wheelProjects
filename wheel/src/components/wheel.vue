<template>
  <div class="wrapper" ref="wrapper">
      <div class="top">
          <div
      class="wrap" ref="tit"
      v-for="(item, index) in data"
      :key="index"
      :id="item.value"
    >
      <p>{{ item.value }}</p>
      <div class="main">
        <div
          class="wrapMain"
          v-for="(items, indexs) in item.child"
          :key="indexs"
          @click="clickItem(items.MasterID)"
        >
          <img :src="items.CoverPhoto" alt="" />
          <p>{{ items.Name }}</p>
        </div>
      </div>
    </div>
      </div>
    
    <ul class="list">
      <li data-hover="hover">#</li>
      <li
        v-for="(item, index) in data"
        :key="index"
        data-hover="hover"
        @click="bind(item.value, index)"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import BScroll from "better-scroll";

export default Vue.extend({
  name: "Wheel",
  data(){
      return {
          ind:-1
      }
  },
  computed: {
    ...mapState({
      data: state => state.wheel.data,
      val: state => state.wheel.val,
      index: state => state.wheel.index
    })
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      probeType: 2,
      click: true
    });
  },
  methods: {
    clickItem(MasterID) {
      this.$store.commit("wheel/changeLeft", true);
      this.$store.dispatch("wheel/getNav", MasterID);
    },
    bind(val, index) {
      this.$store.commit("wheel/changeIndex", {
        val,
        index
      });
      this.bscroll.scrollToElement(this.$refs.tit[index])
    }
  }
});
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    > p {
      font-size: 0.28rem;
      line-height: 0.6rem;
      background: #f4f4f4;
      padding-left: 0.3rem;
      color: #aaa;
      margin: 0;
    }
    .main {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 0.3rem;
      box-sizing: border-box;
      .wrapMain {
        width: 100%;
        height: 1rem;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          height: 0.8rem;
          width: 1rem;
        }
        p {
          margin: 0;
          flex: 1;
          height: 100%;
          font-size: 0.32rem;
          margin-left: 0.4rem;
          line-height: 1rem;
        }
      }
    }
  }
  .list {
    position: fixed;
    z-index: 99;
    position: fixed;
    right: 0;
    top: 10%;
    padding-left: 0.2rem;
    box-sizing: border-box;
    li {
      list-style: none;
      font-size: 0.24rem;
      color: #666;
      font-weight: 500;
      padding: 0.05rem 0.1rem;
      box-sizing: border-box;
    }
  }
}
</style>

