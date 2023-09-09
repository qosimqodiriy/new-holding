<template>
    <div class="bg-white pyt-40 lg:pt-60 xl:pt-80 2xl:pt-100">
        <div class="my_container">
            <div class="flex flex-col lg:flex-row gap-28 lg:gap-36 xl:gap-50 2xl:gap-80 px-16 py-24 xl:px-72 xl:py-38 rounded-16 xl:rounded-24 border border-grey_8 bg-black">
                <div class="max-w-520 2xl:max-w-630 w-full">
                    <h3 class="text-20 lg:text-24 xl:text-26 2xl:text-32 font-halvar_breit_700 text-white uppercase mb-16 lg:mb-18 2xl:mb-16">{{ $t('inner_text_16') }}</h3>
                    <p class="text-16 font-interfaces text-grey_40 ">{{ $t('inner_text_17') }}</p>
                </div>

                <form @submit.prevent="onSubmit()" class="w-full flex flex-col gap-24 xl:gap-40">
                    <div class="flex flex-col md:flex-row gap-24 xl:gap-40">
                        <div class="w-full relative">
                            <input type="text" v-model="name" class="base_input font-interfaces text-white" name="name" id="name" required />
                            <label class="base_label font-interfaces text-white" for="name">{{ $t('inner_text_18') }}</label>
                        </div>
                        
                        <div class="w-full relative">
                            <input type="tel" v-model="phone" class="base_input font-interfaces text-white" name="phone" id="phone" required />
                            <label class="base_label font-interfaces text-white" for="phone">{{ $t('inner_text_19') }}</label>
                        </div>
                    </div>

                    <div class="flex flex-col xl:flex-row xl:items-center gap-24 xl:gap-40">
                        <div class="flex xl:flex-col 2xl:flex-row items-center gap-24 gap-y-8">
                            <p class="text-14 2xl:text-16 font-interfaces text-grey_40 whitespace-nowrap">+998 90 992 17 77</p>
                            <div class="xl:hidden 2xl:block w-1 h-full bg-grey_40 shrink-0">|</div>
                            <p class="text-14 2xl:text-16 font-interfaces text-grey_40 whitespace-nowrap">info@jipgroup.uz</p>
                        </div>

                        <div class="flex-auto w-full flex flex-col md:flex-row xl:items-center gap-24 xl:gap-40">
                            <div class="w-auto p-2 px-10 border border-grey_8">
                                <div class="flex items-center justify-between gap">
                                    <div class="flex items-center gap-10">
                                        <input v-model="captcha" class="w-24 h-24" type="checkbox" name="recaptcha" id="recaptcha" required>
                                        <label for="recaptcha" class="text-white">I'm not a robot</label>
                                    </div>
                                    <img class="w-46" src="../../assets/icons/recaptcha.png" alt="recaptcha">
                                </div>
                            </div>

                            <button class="text-14 2xl:text-16 flex-auto font-halvar_breit_700 text-white w-full md:w-auto py-14 md:px-56 text-center rounded-30 bg-green">{{ $t('inner_text_20') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            phone: '',
            loading: false,
            captcha: false,
        }
    },

    methods: {
        onSubmit() {
            axios.post('https://holdings.pythonanywhere.com/api/application/create', {
                name: this.name,
                number: this.phone,
            })
            .then(response => {
                this.name = '';
                this.phone = '';
                this.captcha = false;
                this.loading = false;
            })
            .catch(error => {
                console.log(error)
                this.loading = false;
                alert("Error: " + error.message);
            });
        }
    },

    mounted() {
        
    }
}
</script>