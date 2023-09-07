<template>
    <div class="my_container p-40 relative">
        <div class="absolute top-0 left-0 w-full h-full">
            <img v-if="color == 'white'" class="w-full h-full object-cover object-center" src="../assets/images/page_title_bg_1.png" alt="">
            <img v-else-if="color == 'black'" class="w-full h-full object-cover object-center" src="../assets/images/page_title_bg_2.png" alt="">
        </div>
        <p class="text text-white font-interfaces_700 text-28 md:text-38 lg:text-48 xl:text-60 2xl:text-72 text-center mb-16 relative">{{ name }}</p>
        <div class="flex items-center justify-center gap-12 relative">
            <NuxtLink @click="scrollToTop()" to="/" class="font-interfaces_500 text-white md:text-18 font-medium">{{ $t('page_name_1') }}</NuxtLink>
            <p class="font-interfaces_500 text-white md:text-18 font-medium">/</p>
            <p class="font-interfaces_500 text-white md:text-18 font-medium cursor-pointer">{{ name }}</p>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        name: {
            type: String,
            required: false,
        },
    },

    data() {
        return {
            color: '',
            bg_color: '',
        }
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },

    mounted() {
        setTimeout(() => {
            this.color = sessionStorage.getItem('color');
            this.bg_color = sessionStorage.getItem('bg_color');
        }, 10);
    }
}
</script>