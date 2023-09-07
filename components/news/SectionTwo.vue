<template>
    <div v-if="data.id" class="my_container py-60 px-15 lg:py-80">
        <div class="main_box max-w-1144 mx-auto">
            <p class="text-24 md:text-26 lg:text-28 xl:text-32 2xl:text-40 font-interfaces_700 font-semibold leading-120">{{ data && data.subtitle ? data.subtitle : '' }}</p>
    
            <div class="flex items-center gap-32 my-24">
                <div class="flex items-center gap-8">
                    <img class="w-24 h-24" src="../../assets/icons/calendar.png" alt="">
                    <p class="font-interfaces text-grey_40">{{ formatDate(data.date, 2) }}</p>
                </div>
                <div class="flex items-center gap-8">
                    <img class="w-24 h-24" src="../../assets/icons/eye.png" alt="">
                    <p class="font-interfaces text-grey_40">{{ data.views }}</p>
                </div>
            </div>
    
            <img class="w-full h-auto mb-40" :src="data.image" alt="">
    
            <div class="news_inner">
                <p v-html="data.text" ></p>
                <!-- <p v-html="data.text" class="text-18 font-interfaces"></p> -->
            </div>
        </div>

        <hr class="border-b border-grey_8 my-60 lg:my-80" >

        <div class="">
            <p class="text-black font-interfaces_600 font-semibold text-24 md:text-26 lg:text-28 xl:text-32 2xl:text-40 mb-30">{{ $t('news_text_1') }}</p>

            <div>
                <swiper
                    :slidesPerView="1"
                    :slidesPerGroup="1"
                    :spaceBetween="24"
                    :speed="800"
                    :loop="false" 
                    
                    :breakpoints="{
                        '769': {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        '1025': {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        '1337': {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                    }" 
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="item in data.other_news" :key="item.id">
                        <news-card :item="item" :line_clamp="true" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/pagination';
import '../../assets/css/default.css';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    data() {
        return {
            slug: '',
            data: {},
            loading: false,
        }
    },
    
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Mousewheel],
        };
    },

    methods: {
        async getItems() {
            this.loading = true;
            const response = await axios.get(`https://holdings.pythonanywhere.com/api/news/${this.slug}`, {
                headers: {
                    "Language": "en",
                }
            });
            this.loading = false;
            console.log("Yangilik Inner");
            console.log(response.data);
            this.data = response.data;
        },

        formatDate(date, type) {
            if(date) {
                let time = date.slice(0, 5)
                let day = date.slice(8, date.length)

                if(type == 1) return time
                else if(type == 2) return day
                else return 'Typeni xato kiritdingiz'
            } else return null
        }
    },

    mounted() {
        this.slug = this.$route.params.slug[0];
        this.getItems()
    }
}
</script>