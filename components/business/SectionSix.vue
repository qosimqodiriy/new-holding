<template>
    <div class="py-100 2xl:py-120 lg:px-15">
        <div class="max-w-1366 2xl:max-w-1700 mx-auto">
            <div class="w-full h-867 lg:h-800 xl:h-600 2xl:h-700 lg:rounded-16 xl:rounded-24 overflow-hidden relative">
                <img class="w-full h-full object-cover object-center" src="../../assets/images/yandex-map.png" alt="">

                <div class="box absolute bottom-16 left-16 right-16 flex flex-wrap flex-col md:flex-row justify-between gap-24 rounded-8 xl:rounded-16 p-16 xl:p-24 2xl:px-40 bg-white">
                    <div class="">
                        <h3 class="text-16 2xl:text-20 font-halvar_breit_500 text-grey mb-8 2xl:mb-16">{{ $t('inner_text_21') }}</h3>
                        <div class="flex items-center gap-12">
                            <img class="w-26 h-26 2xl:w-36 2xl:h-36" src="../../assets/icons/Location-blue.png" alt="">
                            <p class="text-14 2xl:text-18 font-interfaces_500 text-black md:max-w-400 2xl:max-w-565">{{ data.adres }}</p>
                        </div>
                    </div>
                    <div class="">
                        <h3 class="text-16 2xl:text-20 font-halvar_breit_500 text-grey mb-8 2xl:mb-16">{{ $t('inner_text_22') }}</h3>
                        <div class="flex items-center gap-12">
                            <img class="w-26 h-26 2xl:w-36 2xl:h-36" src="../../assets/icons/Call-blue.png" alt="">
                            <div class="flex md:flex-col xl:flex-row 2xl:flex-col gap-x-10 gap-y-5">
                                <a :href="`tel:${nbm_phone}`" target="_blank" class="text-14 2xl:text-18 font-interfaces_500 text-black max-w-565">{{ nbm_phone }}</a>
                                <a :href="`tel:${nbm_faks}`" target="_blank" class="text-14 2xl:text-18 font-interfaces_500 text-black max-w-565">{{ nbm_faks }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <h3 class="text-16 2xl:text-20 font-halvar_breit_500 text-grey mb-8 2xl:mb-16">{{ $t('inner_text_23') }}</h3>
                        <div class="flex items-center gap-12">
                            <img class="w-26 h-26 2xl:w-36 2xl:h-36" src="../../assets/icons/Message-blue.png" alt="">
                            <a href="mailto:info@jipgroup.uz" target="_blank" class="text-14 2xl:text-18 font-interfaces_500 text-black max-w-565">info@jipgroup.uz</a>
                        </div>
                    </div>
                    <div class="">
                        <h3 class="text-16 2xl:text-20 font-halvar_breit_500 text-grey mb-8 2xl:mb-16">{{ $t('inner_text_24') }}</h3>
                        <div class="flex items-center gap-20 2xl:gap-40">
                            <a v-if="data.youtube" :href="data.youtube" target="_blank"><img class="w-24 h-24 2xl:w-36 2xl:h-36" src="../../assets/icons/youtube-blue.png" alt=""></a>
                            <a v-if="data.facebook" :href="data.facebook" target="_blank"><img class="w-24 h-24 2xl:w-36 2xl:h-36" src="../../assets/icons/facebook-blue.png" alt=""></a>
                            <a v-if="data.telegram" :href="data.telegram" target="_blank"><img class="w-24 h-24 2xl:w-36 2xl:h-36" src="../../assets/icons/telegram-blue.png" alt=""></a>
                            <a v-if="data.instagram" :href="data.instagram" target="_blank"><img class="w-24 h-24 2xl:w-36 2xl:h-36" src="../../assets/icons/instagram-blue.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios'

// useHead({
//     title: 'Contact lalala',
//     titleTemplate: 'Gears - %s',
//     meta: [
//         { name: 'description', content: 'Let’s discuss your work together.'}
//     ],
//     script: [
//         {
//             hid: 'recaptcha',
//             src: 'https://www.google.com/recaptcha/api.js?trustedtypes=true?onload=onloadCallback&render=explicit',
//             defer: true
//         },
//     ]
// })

export default {
    data() {
        return {
            data: {},
            loading: false,
            nbm_faks: '',
            nbm_phone: '',
        }
    },

    methods: {
        async getItems() { 
            this.loading = true;
            const response = await axios.get('https://holdings.pythonanywhere.com/api/static_infos');
            this.loading = false;
            this.data = response.data;

            if(response.data.nbm) {
                this.nbm_faks = response.data.nbm.split(',')[1];
                this.nbm_phone = response.data.nbm.split(',')[0];
            }
        },
    },

    async mounted() {
        this.getItems();
    }
}
</script>


<style scoped>
.box {
    border: 1px solid var(--grey-8, #EBEBEB);
    box-shadow: 0px 4px 32px 0px rgba(2, 1, 5, 0.16);
}
</style>