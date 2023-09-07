<template>
    <section class="bg-black py-40 lg:py-60 xl:py-80 lg:pb-80 xl:pb-140 2xl:pb-160">
        <div class="my_container">
            <p class="text-white font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24 xl:mb-30">{{ $t('main_text_9') }}</p>

            <!-- Gallery Swiper -->
            <gallery-swiper />

            <!-- Bizning manzillarimiz -->
            <div class="max-w-1436 mx-auto space-y-32 mt-90 mb-90 lg:mb-100 xl:mb-110 2xl:mb-120">
                <p class="text-white font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24 lg:mb-30">{{ $t('main_text_12') }}</p>
                <ProjectCard v-for="(item, index) in holdings" :key="index" :item="item" :link="true" :last="index == holdings.length - 1 && business.length == 0 ? true : false"></ProjectCard>
                <ProjectCard v-for="(item, index) in business" :key="index" :item="item" :link="false" :last="index == business.length - 1 ? true : false"></ProjectCard>
            </div>

            <!-- Yangiliklar -->
            <div class="bg-black">
                <p class="text-white font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24 lg:mb-30">{{ $t('main_text_13') }}</p>
                <news-swiper />
            </div>

        </div>
    </section>
</template>


<script>
import axios from 'axios'
import ProjectCard from './Projectcard.vue'

export default {

    components: {
        ProjectCard,
    },

    data() {
        return {
            holdings: [],
            business: [],
            data_count: 0,
            loading: false,
        }
    },

    methods: {
        async getHoldings() {
            this.loading = true;
            const response = await axios.get('https://holdings.pythonanywhere.com/api/holdings');
            this.loading = false;
            console.log("holdings index page");
            console.log(response.data);
            this.holdings = response.data.results;
            this.data_count = response.data.count;

            if(!sessionStorage.getItem('holdings')) {
                sessionStorage.setItem('holdings', JSON.stringify(response.data.results));
            }
        },

        async getBusiness() {
            this.loading = true;
            const response = await axios.get('https://holdings.pythonanywhere.com/api/business');
            this.loading = false;
            console.log("Business index page");
            console.log(response.data);
            this.business = response.data.results;
            this.data_count = response.data.count;

            if(!sessionStorage.getItem('business')) {
                sessionStorage.setItem('business', JSON.stringify(response.data.results));
            }
        },
    },

    mounted() {
        this.getHoldings();
        this.getBusiness();
    }
}
</script>


<style scoped>

</style>