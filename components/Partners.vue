<template>
    <swiper 
        :speed="1000"
        :autoplay="{
            delay: 3700,
            disableOnInteraction: true,
        }"
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
        class="mySwiper">

        <swiper-slide v-for="item in data" :key="item.id">
            <div class="w-full h-full p-15 flex flex-col items-center justify-center" :class="border ? 'border border-grey_40' : ''"><img class="h-full max-h-100 max-w-full" :src="item.image" alt=""></div>
        </swiper-slide>
        

    </swiper>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Keyboard, Autoplay, FreeMode } from 'swiper/modules';

export default {
    data() {
        return {
            data: [],
            data_count: 0,
            border: false,
            loading: false,
        }
    },
    
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Keyboard, Autoplay, FreeMode ],
        };
    },

    methods: {
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
        this.getItems();
        this.border = this.$route.path == '/' ? true : false;
    }
};
</script>