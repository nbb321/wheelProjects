<template>
    <div id="wrap">
         <div class="box">
            <swiper class="swiper"  :options="swiperOption" ref="mySwiper"  @slideChangeTransitionStart="changes">
                <swiperSlide class="swiperSlide"  v-for="(item,index) in bannersList" :key="index">
                    <div v-for="(val,index) in item.List" :key="index">
                        <img :src="val" alt="">
                    </div>
                </swiperSlide>
            </swiper>
        </div>    
        <div class="Footer">
            <div class="Left">
                <span>
                    <b>{{i}}</b>/
                    <b>{{Count}}</b>
                </span>
            </div>
        </div>
        <div class="Right">
            <button @click="clicks">询最低价</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    data(){
        return{
            i:0, 
            swiperOption:{
                loop:true,
                on: {
                slideChangeTransitionStart(){
                    this.i=this.activeIndex
                    console.log("i",this.i);
                    console.log("activeIndex",this.activeIndex);
                    
                    }
                },
            }
        }
    },
    components:{
    swiper,swiperSlide
    },
    methods:{
        changes(){

        },
        clicks(){
            this.$router.push("/bannerimg")
        }
    },
    computed:{
        ...mapState({
            bannersList:state=>state.wheel.bannersList,
             Count:state=>state.wheel.Count,
             activeIndexs:state=>state.wheel.activeIndexs
        }),
        swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>

<style scoped lang="scss">
#wrap{
    width: 100%;
    height: 100%;
    background: #000;
    position: relative;
    overflow: hidden;
    .box{
        width: 100%;
        height: 250px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        .swiper{
            width: 100%;
            height: 100%;
            .swiperSlide{
                width: 100%;
                height: 100%;
                div{
                width: 100%;
                height: 100%;
                overflow: hidden;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .Footer{
        width: 100%;
        height:.35rem;
        display: flex;
        position: absolute;
        bottom: 0;
        // color: #000;
        .Left{
            width: 80%;
            text-align: center;
            line-height: .35rem;
            color:#fff;
            padding-left: .5rem;
            box-sizing: border-box;
        }
        .Right{
            width: 20%;
            text-align: center;
            button{
                width: 100%;
                height: .35rem;
                color:#fff;
                text-align: center;
                line-height: .35rem;
                background-color: #3aacff;
                border: 0;
            }
        }
    }
}
</style>


