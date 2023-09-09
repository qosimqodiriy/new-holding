<template>
    <div class="">
        <div class="flex items-center justify-between mb-24 lg:mb-30">
            <p class="text-black font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40">{{ $t('main_text_24') }}</p>

            <div class="flex items-center border border-grey_24 p-6 gap-16 lg:gap-24 rounded-4 bg-white">
                <div @click="clickPrev()" class="p-6 lg:p-10 cursor-pointer"><img class="w-24 h-24" src="../../assets/icons/arrow-left-grey.png" alt=""></div>
                <img class="h-24" src="../../assets/icons/line_swiper.png" alt="">
                <div @click="clickNext()" class="p-6 lg:p-10 cursor-pointer"><img class="w-24 h-24 rotate-180" src="../../assets/icons/arrow-left-grey.png" alt=""></div>
            </div>
        </div>
    
        <swiper
            :speed="1500"
            :autoplay="{
                delay: 3700,
                disableOnInteraction: true,
            }"
            :loop="false" 
            :navigation="true"
            :spaceBetween="8" 
            :slidesPerView="1" 
            :slidesPerGroupSkip="1" 
    
            :breakpoints="{
                '400': {
                    spaceBetween: 10,
                    slidesPerView: 1.5,
                    slidesPerGroup: 1,
                },
                '769': {
                    spaceBetween: 12,
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                '1025': {
                    spaceBetween: 16,
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
                '1337': {
                    spaceBetween: 20,
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                },
            }" 
            :modules="modules"
            class="mySwiper partner_box"
        >
            <swiper-slide v-for="item in data" :key="item.id">
                <div class="w-full h-full p-15 flex flex-col items-center justify-center border border-grey_8"><img class="h-full max-h-100 max-w-full" :src="item.image" alt=""></div>
            </swiper-slide>
        </swiper>
    </div>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Autoplay, FreeMode, Navigation } from 'swiper/modules';

let prev, next;
export default {
    data() {
        return {
            data: [],
            data_count: 0,
            loading: false,
        }
    },
    
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Mousewheel, Autoplay, FreeMode, Navigation],
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
            const response = await axios.get('https://holdings.pythonanywhere.com/api/partners', {
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
            let element = document.querySelector('.partner_box');
            prev = element.children[1];
            next = element.children[2];

            prev.style.display = 'none';
            next.style.display = 'none';
        }, 500);
    }
};
</script>