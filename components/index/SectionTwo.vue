<template>
    <section class="py-40 md:py-50 lg:py-62 xl:py-74 2xl:py-88 relative overflow-hidden" :class="`bg-${bg_color} text-${color}`">
        <div class="bg absolute top-0 left-0"></div>
        <div class="my_container grid lg:grid-cols-11 gap-20 z-10 relative">
            <div class="w-full lg:col-span-6">
                <p class="font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24" :class="color == 'black' ? 'text-black' : 'text-white'">{{ $t('main_text_1') }}</p>
                <p class="text-16 lg:text-18 xl:text-20 font-interfaces leading-150 mb-24">{{ $t('main_text_2') }}</p>
                <p class="text-14 lg:text-16 xl:text-18 font-interfaces leading-150 mb-40 lg:mb-54" :class="color == 'black' ? 'text-grey' : 'text-grey_40'">{{ $t('main_text_2_2') }}</p>


                <NuxtLink to="/about" v-if="color == 'black'" class="flex items-center gap-16 mb-20 lg:mb-54">
                    <p class="text-16 md:text-18  text-blue whitespace-nowrap">{{ $t('main_text_3') }}</p>
                    <img class="w-20 md:w-24" src="../../assets/icons/arrow-right-blue.png" alt="">
                </NuxtLink>

                <div class="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-7">
                    <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                        <div class="flex items-start gap-15">
                            <p class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140">17</p>
                            <img class="w-22 h-22" src="../../assets/icons/plus-blue.png" alt="">
                        </div>
                        <p class="text-18 font-interfaces flex-auto">{{ $t('main_text_5') }}</p>
                    </div>
                    <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                        <div class="flex items-start gap-15">
                            <p class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140">600</p>
                            <img class="w-22 h-22" src="../../assets/icons/plus-blue.png" alt="">
                        </div>
                        <p class="text-18 font-interfaces flex-auto">{{ $t('main_text_6') }}</p>
                    </div>
                    <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                        <div class="flex items-start gap-15">
                            <p class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140">40</p>
                            <img class="w-22 h-22" src="../../assets/icons/plus-blue.png" alt="">
                        </div>
                        <p class="text-18 font-interfaces flex-auto">{{ $t('main_text_7') }}</p>
                    </div>
                    <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                        <div class="flex items-start gap-15">
                            <p class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140">5</p>
                            <img class="w-22 h-22" src="../../assets/icons/plus-blue.png" alt="">
                        </div>
                        <p class="text-18 font-interfaces flex-auto">{{ $t('main_text_8') }}</p>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center w-full lg:col-span-5 min-h-200">
                <div class="flex items-center gap-20">
                    <img v-if="color == 'white'" class="w-150 md:w-180 lg:w-180 xl:w-220 2xl:w-240" src="../../assets/images/logo_earth_white.png" alt="">
                    <img v-else class="w-150 md:w-180 lg:w-180 xl:w-220 2xl:w-240" src="../../assets/images/logo_earth_purple.png" alt="">
                    <img v-if="color == 'white'" class="w-180 md:w-200 lg:w-230 xl:w-280 2xl:w-300" src="../../assets/images/logo_name.png" alt="">
                    <img v-else class="w-180 md:w-200 lg:w-230 xl:w-280 2xl:w-300" src="../../assets/images/logo_name_blue.png" alt="">
                </div>
            </div>

            <div class="grid lg:hidden grid-cols-2 xl:grid-cols-4 gap-7">
                <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                    <div class="flex items-center md:items-start justify-center md:justify-start gap-15">
                        <p class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140">17</p>
                        <img class="w-16 h-16 md:w-22 md:h-22" src="../../assets/icons/plus-blue.png" alt="">
                    </div>
                    <p class="text-16 md:text-18 text-center md:text-start font-interfaces flex-auto">{{ $t('main_text_5') }}</p>
                </div>
                <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                    <div class="flex items-center md:items-start justify-center md:justify-start gap-15">
                        <p class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140">600</p>
                        <img class="w-16 h-16 md:w-22 md:h-22" src="../../assets/icons/plus-blue.png" alt="">
                    </div>
                    <p class="text-16 md:text-18 text-center md:text-start font-interfaces flex-auto">{{ $t('main_text_6') }}</p>
                </div>
                <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                    <div class="flex items-center md:items-start justify-center md:justify-start gap-15">
                        <p class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140">40</p>
                        <img class="w-16 h-16 md:w-22 md:h-22" src="../../assets/icons/plus-blue.png" alt="">
                    </div>
                    <p class="text-16 md:text-18 text-center md:text-start font-interfaces flex-auto">{{ $t('main_text_7') }}</p>
                </div>
                <div class="flex flex-col py-10 px-20 pb-20 md:pb-30" :class="color == 'black' ? 'bg-white_primary text-black' : 'text-white'">
                    <div class="flex items-center md:items-start justify-center md:justify-start gap-15">
                        <p class="text-24 md:text-26 lg:text-30 xl:text-34 2xl:text-64 font-interfaces_700 font-bold leading-140">5</p>
                        <img class="w-16 h-16 md:w-22 md:h-22" src="../../assets/icons/plus-blue.png" alt="">
                    </div>
                    <p class="text-16 md:text-18 text-center md:text-start font-interfaces flex-auto">{{ $t('main_text_8') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>




<script>
export default {
    props: {
        color: {
            type: String,
            required: true,
        },
        bg_color: {
            type: String,
            required: true,
        },
    },
    
    methods: {

    },

    mounted() {
        
    },
}
</script>


<style scoped>
.bg {
    width: 100%;
    height: 100%;
    background: url('../../assets/images/earth_bg.png') no-repeat center right;
    background-size: 1100px;
}




@media (max-width: 1350px) {
    .bg {
        background: url('../../assets/images/earth_bg.png') no-repeat center right;
        background-size: 900px;
    }
}

@media (max-width: 1024px) {
    .bg {
        background: url('../../assets/images/earth_bg.png') no-repeat center right;
        background-size: 800px;
    }
}

@media (max-width: 768px) {
    .bg {
        background: url('../../assets/images/earth_bg.png') no-repeat center right;
        background-size: 600px;
    }
}
</style>