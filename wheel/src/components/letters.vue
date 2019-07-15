<template>
  <div class="letters-list">
      <ul v-for="(item,index) in list" :key="{index}">
        <li>{{item}}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapMutations, mapActions } from "vuex";
// @ is an alias to /src

@Component({
  data() {
      return {
        list:['#','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      }
  },
  components: {}
})
export default class Home extends Vue {

}
</script>
<style lang="scss">
.letters-list{
    z-index: 99;
    position: fixed;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    padding-left: .2rem;
    ul{
        width:0.5rem;
        text-align:center;
        li{
            list-style:none;
            font-size: .24rem;
            color: #666;
            font-weight: 500;
            padding: .02rem .1rem;
        }
    }
}
</style>

