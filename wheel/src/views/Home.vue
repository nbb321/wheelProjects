<template>
    <div class="home">
        <Wheel></Wheel>
        <LeftList></LeftList>
        <LeftMosk></LeftMosk>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Wheel from '@/components/wheel.vue';
import LeftList from '@/components/leftList.vue';
import LeftMosk from '@/components/leftMosk.vue';

export default Vue.extend({
    name: 'home',
    components:{
        Wheel,
        LeftList,
        LeftMosk
    },
    mounted(){
        this.$store.dispatch('wheel/getHome');
    }
});
</script>

<style lang="scss" scoped>
.home{
    width:100%;
    height:100%;
}
</style>
