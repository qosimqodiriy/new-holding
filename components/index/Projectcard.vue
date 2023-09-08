<template>
    <div class="w-full pt-32 grid grid-cols-1 lg:grid-cols-8 gap-24 border-t border-grey_border" :class="last ? 'pb-32 border-b' : ''">
        <div class="lg:col-span-3 flex flex-col">
            <div class="mb-16">
                <img class="w-auto h-36 md:h-56" :src="item.icon" alt="">
            </div>
            
            <a v-if="link" :href="item && item.link ? item.link : '#'" target="_blank" class="flex items-center gap-24 mb-40 lg:mb-auto">
                <p class="text-white text-18 md:text-20 lg:text-24 2xl:text-40 font-interfaces_500 font-medium leading-120">{{ item.title }}</p>
                <img class="w-16 md:w-20 lg:w-24 2xl:w-36 h-16 md:h-20 lg:h-24 2xl:h-36" src="../../assets/icons/arrow-up-right.png" alt="">
            </a>

            <NuxtLink v-else :to="`/business/${item.slug}`" class="flex items-center gap-24 mb-40 lg:mb-auto">
                <p class="text-white text-18 md:text-20 lg:text-24 2xl:text-40 font-interfaces_500 font-medium leading-120">{{ item.title }}</p>
                <img class="w-16 md:w-20 lg:w-24 2xl:w-36 h-16 md:h-20 lg:h-24 2xl:h-36" src="../../assets/icons/arrow-up-right.png" alt="">
            </NuxtLink>
            

            <div v-if="item && item.tags" class="flex items-center gap-12 flex-wrap">
                <p v-for="tag in item.tags" :key="tag.id" class="text-14 text-grey_border px-15 md:px-20 py-5 md:py-8 rounded-30 border border-grey_border font-interfaces">{{ tag.title }}</p>
            </div>
        </div>

        <div class="card lg:col-span-5 w-full h-full max-h-400 min-h-300 overflow-hidden">
            <img v-if="item.images && item.images[0] && item.images[0].image" class="w-full h-full max-h-full object-cover object-center" :src="item.images[0].image" alt="">
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
        item: {
            type: Object,
            required: true,
        },
        link: {
            type: Boolean,
            required: true,
        },
    },
}
</script>


<style scoped>
* {
    transition: 0.37s;
}

.card:hover > img {
    transition: 0.5s;
    transform: scale(1.2);
}
</style>