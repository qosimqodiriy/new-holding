<template>
    <div class="">
        <div class="mb-40 relative">
            <div class="card_bg w-92% h-6 md:h-10 lg:h-12 xl:h-20 2xl:h-24 mx-auto"></div>
            <div class="card_bg w-96% h-6 md:h-10 lg:h-12 xl:h-20 2xl:h-24 mx-auto"></div>
            <img class="absolute bottom-0 left-0 right-0" src="../assets/images/carier_bg.png" alt="">
            <div class="w-full py-24 lg:pt-32 pb-28 lg:pb-40 border border-grey">
                <p class="font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24 lg:mb-32 text-center">{{ $t('about_text_2') }}</p>
                
                <hr class="border-b border-t-0 border-grey mt-24 lg:mt-32 mb-28 lg:mb-40">

                <div class="swiper_box relative px-16 lg:px-24">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-40">
                        <div class="w-full h-auto md:h-400 xl:h-500 md:min-h-400 overflow-hidden relative">
                            <img v-for="(item, index) in images" :key="index" class="swiper_img block md:absolute top-0 left-0 w-full h-auto md:h-full object-cover object-center" :class="active == index ? 'active_img' : 'not_active_img'" :src="item.image" alt="">
                        </div>

                        <div class="news_inner lg:max-w-700 relative pr-10 h-400 xl:h-500 md:min-h-400 overflow-y-scroll carier_text">
                            <p v-if="images[active] && images[active].desc" v-html="images[active].desc"></p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>

        <div class="w-full border-t border-grey">
            <div class="flex items-start gap-20 justify-between lg:max-w-80% lg:mx-auto overflow-x-scroll scroll_none">
                <div v-for="(item, index) in images" :key="index" @click="onClick(index)" class="flex flex-col items-center cursor-pointer">
                    <div class="w-1 h-20 lg:h-32 bg-grey mb-8"></div>
                    <p class="text-10 md:text-14 lg:text-18 xl:text-20 2xl:text-24 transition-all duration-200" :class="active == index ? 'text-14 md:text-18 lg:text-24 xl:text-32 2xl:text-40 font-interfaces_600 text-facebook-blue' : 'font-interfaces_500 text-grey_border'">{{ item.year }}</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios'

export default {
    data() {
        return {
            active: 0,
            images: [],
            last_active: 0,
        }
    },

    methods: {
        onClick(index) {
            this.last_active = this.active;
            this.active = index;

            setTimeout(() => {

            }, 200);

        },

        async getItems() {
            this.loading = true;
            const response = await axios.get('https://holdings.pythonanywhere.com/api/cariers', {
                headers: {
                    Language: this.$i18n.locale ? this.$i18n.locale : '',
                }
            });
            this.loading = false;
            this.images = response.data.results;
        },
    },

    mounted() {
        this.getItems()
    }
}
</script>



<style scoped>
* {
    transition: 0.37s;
}

.card_bg {
    background: #09070D;
    border: 1px solid #353437;
    border-bottom: none;
}


.swiper_img.active_img {
    opacity: 1;
    z-index: 10;
    transform: translateX(0);
}

.swiper_img.not_active_img {
    opacity: 0;
    z-index: -1;
    transform: translateX(100%);
}

.carier_text::-webkit-scrollbar {
    width: 3px;
}

.carier_text::-webkit-scrollbar-thumb {
    width: 3px;
    border-radius: 4px;
}

@media (max-width: 768px) {
    .swiper_img.active_img {
        opacity: 1;
        z-index: 10;
        display: block;
        transform: translateX(0);
    }

    .swiper_img.not_active_img {
        opacity: 0;
        z-index: -1;
        display: none;
        transform: translateX(100%);
    } 

    .carier_text::-webkit-scrollbar {
        width: 2px;
    }
}
</style>