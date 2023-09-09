<template>
    <swiper
        :slidesPerView="'auto'"
        :mousewheel="true"
        :spaceBetween="24"
        :speed="800"
        :freeMode="true"
        
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="item in data" :key="item.id">
            <gallery-card :item="item" />
        </swiper-slide>
    </swiper>
</template>


<script>
import 'swiper/css';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, FreeMode } from 'swiper/modules';



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
            modules: [Mousewheel, FreeMode],
        };
    },


    methods: {
        async getItems() {
            this.loading = true;
            // const { page = 1 } = this.$route.query
            const response = await axios.get('https://holdings.pythonanywhere.com/api/media', {
                params: {
                    page: 1,
                    type: 'image',
                    page_size: 25,
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
    }
};
</script>


<style scoped>
.swiper {
    width: 100%;
    height: 100%;
    display: flex;
}

.swiper-slide {
    width: auto;
    height: 500px;
}


@media (max-width: 768px) {
    .swiper-slide {
        width: auto;
        height: 435px;
    }
}
</style>