<template>
    <div class="my_container py-60 lg:pt-80">
        <div class="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 items-start gap-24">
            <div class="lg:col-span-3 xl:col-span-2">
                <div class="w-full h-300 md:h-500  overflow-hidden mb-24 border border-grey_8">
                    <div class="w-full h-full" v-html="data_iframe"></div>
                </div>

                <div class="flex flex-col lg:flex-row flex-wrap gap-40">
                    <!-- Адресс -->
                    <div class="lg:max-w-500">
                        <div class="flex items-center gap-24 mb-16">
                            <img class="w-24 h-24" src="../../assets/icons/Location-black.png" alt="">
                            <p class="text-20 font-medium text-black font-interfaces_500">{{ $t('main_text_15') }}</p>
                        </div>

                        <p class="text-18 font-inter">{{ data.adres }}</p>
                    </div>

                    <!-- Тел/Факс: -->
                    <div class="lg:max-w-500">
                        <div class="flex items-center gap-24 mb-16">
                            <img class="w-24 h-24" src="../../assets/icons/Call-black.png" alt="">
                            <p class="text-20 font-medium text-black font-interfaces_500">{{ $t('main_text_18') }}</p>
                        </div>

                        <p class="text-black text-18 font-inter whitespace-nowrap">{{ nbm_phone }}</p>
                        <p class="text-black text-18 font-inter whitespace-nowrap">{{ nbm_faks }}</p>
                    </div>

                    <!-- Социальные медиа: -->
                    <div class="lg:max-w-500">
                        <div class="flex items-center gap-24 mb-16">
                            <img class="w-24 h-24" src="../../assets/icons/Message-black.png" alt="">
                            <p class="text-20 font-medium text-black font-interfaces_500">{{ $t('main_text_17') }}</p>
                        </div>

                        <div class="flex items-center gap-40">
                            <a v-if="data.youtube" :href="data.youtube" target="_blank"><img class="w-32 h-32" src="../../assets/icons/youtube-black.png" alt=""></a>
                            <a v-if="data.facebook" :href="data.facebook" target="_blank"><img class="w-32 h-32" src="../../assets/icons/facebook-black.png" alt=""></a>
                            <a v-if="data.telegram" :href="data.telegram" target="_blank"><img class="w-32 h-32" src="../../assets/icons/telegram-black.png" alt=""></a>
                            <a v-if="data.instagram" :href="data.instagram" target="_blank"><img class="w-32 h-32" src="../../assets/icons/instagram-black.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>

            <form @submit.prevent="onSubmit()" class="lg:col-span-2 xl:col-span-1 p-24 border border-grey_8 space-y-24">
                <p class="text-24 md:text-28 lg:text-32 font-semibold font-interfaces_600">{{ $t('page_name_6') }}</p>

                <div class="w-full relative">
                    <input type="text" v-model="name" class="base_input font-interfaces" name="name" id="name" required />
                    <label class="base_label font-interfaces" for="name">{{ $t('main_text_20') }}</label>
                </div>

                <div class="w-full relative">
                    <input type="text" v-model="phone" class="base_input font-interfaces" name="phone" id="phone" required />
                    <label class="base_label font-interfaces" for="phone">{{ $t('main_text_21') }}</label>
                </div>

                <div class="w-full relative">
                    <textarea v-model="commit" class=" base_input font-interfaces min-h-72 scroll_none" rows="3" name="description" id="description" required></textarea>
                    <label class="base_label font-interfaces" for="description">{{ $t('main_text_22') }}</label>
                </div>

                <div class="flex flex-col 2xl:flex-row gap-16">
                    <!-- <div id="g-recaptcha"></div> -->
                    <div class="w-full 2xl:w-50% p-16 border border-grey_8">
                        <div class="flex items-center justify-between gap">
                            <div class="flex items-center gap-10">
                                <input v-model="captcha" class="w-24 h-24" type="checkbox" name="recaptcha" id="recaptcha" required>
                                <label for="recaptcha">I'm not a robot</label>
                            </div>
                            <img class="w-46" src="../../assets/icons/recaptcha.png" alt="recaptcha">
                        </div>
                    </div>

                    <button :disabled="loading ? true : false" class="flex w-full 2xl:w-50% items-center justify-center gap-8 px-24 py-16 bg-purple">
                        <p class="text-14 font-interfaces_700 font-bold uppercase text-white">{{ $t('main_text_23') }}</p>
                        <img class="w-24 h-24" src="../../assets/icons/arrow-right-white.png" alt="">
                    </button>
                </div>
            </form>
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
            name: '',
            phone: '',
            commit: '',
            loading: false,
            captcha: false,
            nbm_faks: '',
            nbm_phone: '',
            data_iframe: '',
        }
    },

    methods: {
        async getItems() { 
            this.loading = true;
            const response = await axios.get('https://holdings.pythonanywhere.com/api/static_infos', {
                headers: {
                    Language: this.$i18n.locale ? this.$i18n.locale : '',
                }
            });
            this.loading = false;
            this.data = response.data;

            this.data_iframe = this.data.map

            if(response.data.nbm) {
                this.nbm_faks = response.data.nbm.split(',')[1];
                this.nbm_phone = response.data.nbm.split(',')[0];
            }
        },

        onSubmit() {
            axios.post('https://holdings.pythonanywhere.com/api/application/create', {
                name: this.name,
                number: this.phone,
                message: this.commit,
            })
            .then(response => {
                this.name = '';
                this.phone = '';
                this.commit = '';
                this.captcha = false;
                this.loading = false;
                console.log(response);
            })
            .catch(error => {
                console.log(error)
                this.loading = false;
                alert("Error: " + error.message);
            });
        }
    },

    async mounted() {
        this.getItems();
    }
}
</script>


<style scoped>
.base_input {
    width: 100%;
    outline: none;
    padding: 12px 0;
    font-size: 18px;
    line-height: 150%;
    border-bottom: 1px solid #C2C2C3;
}

.base_label {
    font-size: 16px;
    transition: 0.2s;
    line-height: 150%;
    color: #6F7E70;

    position: absolute;
    top: 14px;
    left: 0;
    width: 100%;
    background-color: transparent;
}


textarea:focus + label,
textarea:valid + label {
    top: -8px;
    left: 0;
    font-size: 16px;
    /* line-height: 12px; */
    /* letter-spacing: 0.5px; */
}

input:focus + label,
input:valid + label {
    left: 0 !important;
    top: -8px !important;
    font-size: 14px !important;
    /* line-height: 12px !important; */
    /* letter-spacing: 0.5px !important; */
    background-color: transparent !important;
}
</style>