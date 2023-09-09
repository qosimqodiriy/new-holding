<template>
    <div class="">
        <div class="flex items-center justify-between mb-24 lg:mb-30">
            <p class="text-white font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 ">{{ $t('main_text_13') }}</p>

            <div class="flex items-center p-6 gap-16 lg:gap-24 rounded-4 bg-black_bg">
                <div @click="clickPrev()" class="p-6 lg:p-10 cursor-pointer"><img class="w-24 h-24" src="../assets/icons/arrow-left-white-2.png" alt=""></div>
                <img class="h-24" src="../assets/icons/line_swiper.png" alt="">
                <div @click="clickNext()" class="p-6 lg:p-10 cursor-pointer"><img class="w-24 h-24" src="../assets/icons/arrow-right-white-2.png" alt=""></div>
            </div>
        </div>
    
        <swiper
            :slidesPerView="1"
            :slidesPerGroup="1"
            :spaceBetween="8"
            :speed="800"
            :loop="true" 
            :freeMode="false"
            :mousewheel="false"
            :navigation="true"
    
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
            class="mySwiper news_box"
        >
            <swiper-slide v-for="item in data" :key="item.id">
                <news-card :item="item" :line_clamp="true" />
            </swiper-slide>
        </swiper>
    </div>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, FreeMode, Navigation } from 'swiper/modules';

// let onSwiper, onSlideChange;

let prev, next;
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
        return {
            modules: [Mousewheel, FreeMode, Navigation],
        };
    },


    methods: {

        clickPrev() {
            prev.click()
        },

        clickNext() {
            next.click()
        },

        async getItems() {
            this.loading = true;
            const { page = 1 } = this.$route.query
            const response = await axios.get('https://holdings.pythonanywhere.com/api/news', {
                params: {
                    page: page,
                    page_size: 10,
                },
                headers: {
                    Language: this.$i18n.locale ? this.$i18n.locale : '',
                }
            });
            this.loading = false;
            this.data = response.data.results;
            this.data_count = response.data.count;
        },
        
    },

    mounted() {
        this.getItems()


        setTimeout(() => {
            let element = document.querySelector('.news_box');
            prev = element.children[1];
            next = element.children[2];

            prev.style.display = 'none';
            next.style.display = 'none';
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