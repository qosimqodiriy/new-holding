<template>
    <footer class="bg-black">
        <div class="my_container py-20 md:py-24 lg:py-30 xl:py-40">
            <div class="flex flex-wrap gap-40 gap-y-24 mb-40 lg:mb-60">
                <div class="w-full md:w-auto flex items-center justify-center gap-2">
                    <img class="w-68" src="../assets/images/logo_earth_white.png" alt="">
                    <img class="w-78" src="../assets/images/logo_name.png" alt="">
                </div>

                <a :href="item.link" target="_blank" v-for="item in holdings" :key="item.id" class="w-full md:w-auto text-center p-16 px-40 text-white text-14 lg:text-20 font-medium font-interfaces_500 border border-grey_8">{{ item.title }}</a>
                <nuxt-link :to="`/business/${item.slug}`" v-for="item in business" :key="item.id" class="w-full md:w-auto p-16 px-40 border border-grey_8"><p class="text-white text-14 lg:text-20 text-center font-medium font-interfaces_500">{{ item.title }}</p></nuxt-link>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 mb-16">
                <div class="py-24 border-y border-grey_border">
                    <div class="flex items-center justify-center md:justify-start gap-24 mb-24">
                        <img class="w-40 h-40" src="../assets/icons/Location.png" alt="">
                        <p class="text-white text-24 font-inter font-medium leading-140">{{ $t('main_text_15') }}</p>
                    </div>
                    <p class="text-14 lg:text-16 2xl:text-18 font-inter text-grey_40 text-center md:text-start">{{ data.adres }}</p>
                </div>
                <div class="py-24 border-y border-grey_border">
                    <div class="flex items-center justify-center md:justify-start gap-24 mb-24">
                        <img class="w-40 h-40" src="../assets/icons/Call.png" alt="">
                        <p class="text-white text-24 font-inter font-medium leading-140">{{ $t('main_text_18') }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-24">
                        <a :href="`tel:${nbm_phone}`" class="text-14 lg:text-16 2xl:text-18 font-inter text-grey_40">{{ nbm_phone }}</a>
                        <a :href="`tel:${nbm_faks}`" class="text-14 lg:text-16 2xl:text-18 font-inter text-grey_40">{{ nbm_faks }}</a>
                    </div>
                </div>
                <div class="py-24 border-y border-grey_border">
                    <div class="flex items-center justify-center md:justify-start gap-24 mb-24">
                        <img class="w-40 h-40" src="../assets/icons/Message.png" alt="">
                        <p class="text-white text-24 font-inter font-medium leading-140">{{ $t('main_text_17') }}</p>
                    </div>
                    <div class="flex items-center justify-center md:justify-start gap-30 xl:gap-40">
                        <a :href="data.youtube" target="_blank"><img class="w-32 h-32 shrink-0" src="../assets/icons/youtube.png" alt=""></a>
                        <a :href="data.facebook" target="_blank"><img class="w-32 h-32 shrink-0" src="../assets/icons/facebook.png" alt=""></a>
                        <a :href="data.telegram" target="_blank"><img class="w-32 h-32 shrink-0" src="../assets/icons/telegram.png" alt=""></a>
                        <a :href="data.instagram" target="_blank"><img class="w-32 h-32 shrink-0" src="../assets/icons/instagram.png" alt=""></a>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center md:justify-between gap-40 gap-y-20 flex-wrap">
                <p class="text-14 lg:text-16 2xl:text-18 font-inter text-white">{{ $t('developer') }}</p>

                <div class="flex items-center gap-3">
                    <p class="text-14 lg:text-16 2xl:text-18 font-interfaces font-medium text-grey_40">{{ $t('designer') }}</p>
                    <p class="text-14 lg:text-16 2xl:text-18 font-interfaces font-medium text-white">Mazmoon Group</p>
                </div>
            </div>
        </div>
    </footer>
</template>




<script>
export default {
    data() {
        return {
            data: {},
            holdings: [],
            business: [],
            nbm_faks: '',
            nbm_phone: '',
        }
    },

    methods: {
        async getInfo() {
            if(this.holdings.length == 0 || this.business.length == 0) {
                if(sessionStorage.getItem('holdings')) {
                    this.holdings = JSON.parse(sessionStorage.getItem('holdings'));
                } else  setTimeout(() => { this.getInfo() }, 100);

                if(sessionStorage.getItem('business')) {
                    this.business = JSON.parse(sessionStorage.getItem('business'));
                } else  setTimeout(() => { this.getInfo() }, 100);

                if(sessionStorage.getItem('static_infos')) {
                    this.data = JSON.parse(sessionStorage.getItem('static_infos'));

                    if(this.data) {
                        this.nbm_faks = this.data.nbm.split(',')[1];
                        this.nbm_phone = this.data.nbm.split(',')[0];
                    }
                } else  setTimeout(() => { this.getInfo() }, 100);
            } else {
                setTimeout(() => {
                    this.getInfo()
                }, 100);
            }
        }
    },

    mounted() {
        this.getInfo()    
    }
}
</script>



<style scoped>
    .footer_title {
        font-size: 20px;
        font-weight: 600;
        line-height: 150%;
        font-style: normal;
        font-family: 'TT Firs Neue';
        color: var(--dark-green, #1D2B1E);
    }

    .footer_text {
        display: block;
        font-size: 18px;
        font-weight: 400;
        line-height: 150%;
        font-style: normal;
        white-space: nowrap;
        font-family: 'TT Interfaces';
        color: var(--dark-green, #1D2B1E);
    }
</style>