<template>
    <section class="bg-white py-40 lg:py-60 xl:py-80 2xl:py-100">
        <div class="my_container">
            <div class="box bg-black px-20 md:px-40 py-50 md:py-60 lg:py-72 xl:py-84 mb-60 lg:mb-100">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-50 max-w-1366 mx-auto">
                    <div>
                        <p class="text-white font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-20 lg:mb-32 xl:mb-44">{{ $t('main_text_14') }}</p>
    
                        <div class="mb-32">
                            <p class="font-interfaces text-grey_40 mb-8">{{ $t('main_text_15') }}</p>
                            <p class="text-18 font-interfaces font-semibold">{{ data.adres }}</p>
                        </div>

                        <div class="flex flex-wrap items-start gap-32 gap-x-56">
                            <div class="flex md:flex-col flex-wrap gap-32">
                                <div>
                                    <p class="font-interfaces text-grey_40 mb-8">{{ $t('main_text_16') }}</p>
                                    <p class="text-18 font-halvar font-bold uppercase ">{{ nbm_phone }}</p>
                                </div>
                                
                                <div>
                                    <p class="font-interfaces text-grey_40 mb-8">{{ $t('main_text_18') }}</p>
                                    <p class="text-18 font-halvar font-bold uppercase">{{ nbm_faks }}</p>
                                </div>
                            </div>
                            <div>
                                <p class="font-interfaces text-grey_40 mb-8">{{ $t('main_text_17') }}</p>
                                <div class="flex flex-wrap items-center gap-40 ">
                                    <a :href="data.youtube" target="_blank"><img class="w-32 h-32" src="../../assets/icons/youtube.png" alt=""></a>
                                    <a :href="data.facebook" target="_blank"><img class="w-32 h-32" src="../../assets/icons/facebook.png" alt=""></a>
                                    <a :href="data.telegram" target="_blank"><img class="w-32 h-32" src="../../assets/icons/telegram.png" alt=""></a>
                                    <a :href="data.instagram" target="_blank"><img class="w-32 h-32" src="../../assets/icons/instagram.png" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="text-white font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-20 lg:mb-32 xl:mb-44">{{ $t('main_text_19') }}</p>

                        <form @submit.prevent="onSubmit()">
                            <div class="flex flex-col lg:flex-row gap-32 mb-32">
                                <div class="w-full relative">
                                    <input type="text" v-model="name" class="base_input font-interfaces" name="name" id="name" required />
                                    <label class="base_label font-interfaces" for="name">{{ $t('main_text_20') }}</label>
                                </div>
    
                                <div class="w-full relative">
                                    <input type="text" v-model="phone" minlength="13" maxlength="13" class="base_input font-interfaces" name="phone" id="phone" required />
                                    <label class="base_label font-interfaces" for="phone">{{ $t('main_text_21') }}</label>
                                </div>
                            </div>

                            <div class="w-full relative mb-32">
                                <textarea v-model="commit" class=" base_input font-interfaces min-h-72 scroll_none" rows="3" name="description" id="description" required></textarea>
                                <label class="base_label font-interfaces" for="description">{{ $t('main_text_22') }}</label>
                            </div>

                            <div class="flex flex-col xl:flex-row gap-16">
                                <div class="w-full max-w-245 px-10 py-5 border border-grey_8">
                                    <div class="flex items-center justify-between gap">
                                        <div class="flex items-center gap-10">
                                            <input v-model="captcha" class="w-24 h-24" type="checkbox" name="recaptcha" id="recaptcha" required>
                                            <label for="recaptcha">I'm not a robot</label>
                                        </div>
                                        <img class="w-46" src="../../assets/icons/recaptcha.png" alt="recaptcha">
                                    </div>
                                </div>

                                <button class="flex w-full items-center justify-center gap-8 px-24 py-16 bg-purple">
                                    <p class="text-14 font-interfaces font-bold uppercase text-white">{{ $t('main_text_23') }}</p>
                                    <img class="w-24 h-24" src="../../assets/icons/arrow-right-white.png" alt="">
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <partners-box />
        </div>
    </section>
</template>


<script>
import axios from 'axios'
import PartnersBox from './PartnersBox.vue';

export default {
    data() {
        return {
            data: {},
            name: '',
            phone: '',
            commit: '',
            captcha: false,
            loading: false,
            nbm_faks: '',
            nbm_phone: '',
        }
    },

    components: {
        PartnersBox,
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


            if(!sessionStorage.getItem('static_infos')) {
                sessionStorage.setItem('static_infos', JSON.stringify(response.data));
            }

            if(response.data.nbm) {
                this.nbm_faks = response.data.nbm.split(',')[1];
                this.nbm_phone = response.data.nbm.split(',')[0];
            }
        },

        onSubmit() {
            this.loading - true;
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
            })
            .catch(error => {
                console.log(error)
                this.loading = false;
                alert("Error: " + error.message);
            });
        },
    },

    mounted() {
        this.getItems()
    }
}
</script>


<style scoped>
.box {
    background: #18171B url('../../assets/images/bg_img_1.png') no-repeat left center;
    background-size: 1000px;
}

@media (max-width: 1350px) {
    .box {
        background-size: 700px;
    }
}

@media (max-width: 1024px) {
    .box {
        background: #18171B url('../../assets/images/bg_img_1.png') no-repeat top center;
        background-size: 500px;
    }
}
</style>