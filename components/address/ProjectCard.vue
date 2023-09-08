<template>
    <div class="w-full pt-32 border-t border-grey_border" :class="last ? 'pb-32 border-b' : ''">
        <div class="w-full grid grid-cols-1 lg:grid-cols-8 gap-24 space-x-reverse max-w-1366 2xl:max-w-1436 mx-auto" :class="index % 2 == 1 ? 'reverse' : ''">
            <div class="item_1 flex flex-col" :class="index % 2 == 0 ? 'lg:col-span-3' : ''">
                <p class="text-white text-34 md:text-36 lg:text-40 xl:text-46 2xl:text-64 font-babesNeue leading-120 mb-10">{{ item && item.title ? item.title : '' }}</p>
                <div class="mb-42 lg:mb-auto">
                    <img class="h-36 lg:h-46 w-auto" :src="item.icon" alt="">
                </div>
    
                <div class="block lg:hidden w-full h-full overflow-hidden relative mb-24" :class="index % 2 == 0 ? 'lg:col-span-5' : ''">
                    <div class="relative w-full h-250 md:h-400 lg:h-500 overflow-hidden">
                        <img v-for="(img, index) in item.images" :key="img.id" class="swiper_img absolute top-0 left-0 w-full h-full max-h-full border border-grey_border object-cover object-center" :class="active == index ? 'active' : 'not_active'" :src="img.image" alt="">
                    </div>
    
                    <div @click="prevClick()" v-if="item.images && item.images.length > 1" class="change_btn absolute z-20 top-50% left-10 md:left-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer flex items-center justify-center rounded-full border border-grey_border">
                        <img class="w-24 h-24" src="../../assets/icons/arrow-left-white.png" alt="">
                    </div>
    
                    <div @click="nextClick()" v-if="item.images && item.images.length > 1" class="change_btn absolute z-20 top-50% right-10 md:right-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer flex items-center justify-center rounded-full border border-grey_border">
                        <img class="w-24 h-24" src="../../assets/icons/arrow-right-white.png" alt="">
                    </div>
                </div>
    
    
                <a v-if="link" :href="item && item.link ? item.link : '#'" target="_blank" class="inline-flex items-center gap-24 mb-12 md:mb-16 lg:mb-24 xl:mb-32 2xl:mb-40">
                    <p class="text-16 md:text-18 xl:text-20 2xl:text-24 text-white font-interfaces">Перейти на сайт</p>
                    <img class="w-16 h-16 lg:w-22 lg:h-22" src="../../assets/icons/arrow-up-right.png" alt="">
                </a>
    
                <!-- <NuxtLink v-else :to="`/business/bu_slug_uzimdan`" class="inline-flex items-center gap-24 mb-12 md:mb-16 lg:mb-24 xl:mb-32 2xl:mb-40"> -->
                <NuxtLink v-else :to="`/business/${item.slug}`" class="inline-flex items-center gap-24 mb-12 md:mb-16 lg:mb-24 xl:mb-32 2xl:mb-40">
                    <p class="text-16 md:text-18 xl:text-20 2xl:text-24 text-white font-interfaces">Перейти на сайт</p>
                    <img class="w-16 h-16 lg:w-22 lg:h-22" src="../../assets/icons/arrow-up-right.png" alt="">
                </NuxtLink>
                
    
                <div v-if="item && item.tags" class="flex items-center gap-12 flex-wrap">
                    <p v-for="tag in item.tags" :key="tag.id" class="text-14 text-grey_border px-20 py-8 rounded-30 border border-grey_border font-interfaces">{{ tag.title }}</p>
                </div>
            </div>
    
            <div class="hidden lg:block item_2 w-full h-full overflow-hidden relative" :class="index % 2 == 0 ? 'lg:col-span-5' : ''">
                <div class="relative w-full h-250 md:h-400 lg:h-500 overflow-hidden">
                    <img v-for="(img, index) in item.images" :key="img.id" class="swiper_img absolute top-0 left-0 w-full h-full max-h-full border border-grey_border object-cover object-center" :class="active == index ? 'active' : 'not_active'" :src="img.image" alt="">
                </div>
    
                <div @click="prevClick()" v-if="item.images && item.images.length > 1" class="change_btn absolute z-20 top-50% left-10 md:left-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer flex items-center justify-center rounded-full border border-grey_border">
                    <img class="w-24 h-24" src="../../assets/icons/arrow-left-white.png" alt="">
                </div>
    
                <div @click="nextClick()" v-if="item.images && item.images.length > 1" class="change_btn absolute z-20 top-50% right-10 md:right-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer flex items-center justify-center rounded-full border border-grey_border">
                    <img class="w-24 h-24" src="../../assets/icons/arrow-right-white.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    props: {
        last: {
            type: Boolean,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
        link: {
            type: Boolean,
            required: true,
        },
        len1: {
            type: Number,
            required: false,
        },
        len2: {
            type: Number,
            required: false,
        },
    },

    data() {
        return {
            active: 0,
        }
    },

    methods: {
        prevClick() {
            this.active = this.active > 0 ? this.active - 1 : this.item.images.length - 1;
        },

        nextClick() {
            this.active = this.active < this.item.images.length - 1 ? this.active + 1 : 0;
        }

    },


}
</script>


<style scoped>
* {
    transition: 0.5s;
}
.reverse .item_1 {
    grid-row: 1 / span 1;
    grid-column: 6 / span 3;
}

.reverse .item_2 {
    grid-row: 1 / span 1;
    grid-column: 1 / span 5;
}


/* Swiper js */
.swiper_img.active {
    opacity: 1;
    z-index: 10;
    transform: scale(1);
}

.swiper_img.not_active {
    opacity: 0;
    z-index: -1;
    transform: scale(0.9);
}

.change_btn {
    backdrop-filter: blur(8px);
    background: rgba(2, 1, 5, 0.16);
}

.change_btn:active {
    background-color: #353437;
}



@media (max-width: 1024px) {
    .reverse .item_1 {
        grid-row: 2 / span 1;
        grid-column: 1 / span 1;
    }

    .reverse .item_2 {
        grid-row: 1 / span 1;
        grid-column: 1 / span 1;
    }
}
</style>