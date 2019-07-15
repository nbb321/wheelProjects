<template>
  <div class="car-list">
    <div id="">
      <p></p>
      <ul>
        <li v-for="(item, index) in carsdata" :key="{ index }">
          <img :src="item.CoverPhoto" alt="" />
          <span>{{ item.Name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapMutations, mapActions } from "vuex";
// @ is an alias to /src

@Component({
  components: {},
  methods: {
    ...mapActions(["getcardata"]),
    ...mapMutations(["updatecardata"])
  },
  mounted() {
    this.getcardata();
  },
  computed: {
    ...mapState(["carsdata"])
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.car-list {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ul {
    width: 90%;
    margin: 0 auto;
    p {
      width: 90%;
      height: 0.8rem;
      background: #eee;
      line-height: 0.8rem;
    }
    li {
      list-style: none;
      height: 1rem;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      line-height: 1rem;
      display: flex;
      align-items: center;
      img {
        height: 0.8rem;
        border: none;
      }
      span {
        font-size: 0.32rem;
        margin-left: 0.4rem;
      }
    }
  }
}
</style>

