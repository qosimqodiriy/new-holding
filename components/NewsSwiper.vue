<template>
    <!-- 
        :freeMode="true"
        
        @navigationNext="clickNext"
        @navigationPrev="clickPrev"
    -->
    <swiper
        :slidesPerView="1"
        :slidesPerGroup="1"
        :spaceBetween="8"
        :speed="800"
        :loop="false" 
        :mousewheel="true"
        :navigation="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"

        :breakpoints="{
            '769': {
                spaceBetween: 12,
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            '1025': {
                spaceBetween: 16,
                slidesPerView: 3,
                slidesPerGroup: 2,
            },
            '1337': {
                spaceBetween: 20,
                slidesPerView: 4,
                slidesPerGroup: 3,
            },
        }" 
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="item in data" :key="item.id">
            <news-card :item="item" :line_clamp="true" />
        </swiper-slide>
    </swiper>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, FreeMode, Navigation } from 'swiper/modules';


export default {
    data() {
        return {
            data: [],
            data_count: 0,
        }
    },
    
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        
        const onSlideChange = (swiper) => {
            console.log('slide change');
            console.log(swiper);
        };

        return {
            onSwiper,
            onSlideChange,
            modules: [Mousewheel, FreeMode, Navigation],
        };
    },


    methods: {

        async getItems() {
            this.loading = true;
            const { page = 1 } = this.$route.query
            const response = await axios.get('https://holdings.pythonanywhere.com/api/news', {
                params: {
                    page: page,
                    page_size: 10,
                },
            });
            this.loading = false;
            // console.log("Yangiliklar");
            // console.log(response.data);
            this.data = response.data.results;
            this.data_count = response.data.count;
        },
        
    },

    mounted() {
        this.getItems()


        setTimeout(() => {
            
        }, 500);
    }
};
</script>


<style scoped>
.mySwiper {
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
}
</style>