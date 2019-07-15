<template>
  <div class="home">
    <carlist />
    <letters />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {mapState,mapMutations,mapActions} from 'vuex'
import carlist from '@/components/carlist.vue'
import letters from "@/components/letters.vue"
 // @ is an alias to /src

@Component({
  components: {
    carlist,
    letters
  },
  methods: {
    
  },
  mounted() {
    
  },
  computed:{
    
  }
})

export default class Home extends Vue {
  
}
</script>
<style lang="scss">
.home{
    width:100%;
    height:100%;
}
</style>

