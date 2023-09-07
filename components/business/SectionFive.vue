<template>
    <div class="py-100 2xl:py-120 bg-white">
        <div class="my_container">
            <h2 class="text-24 xl:text-26 2xl:text-32 text-center lg:text-start font-halvar_breit_700 text-grey uppercase mb-24 2xl:mb-40">Новости</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-24 gap-x-16 2xl:gap-x-24 mb-32 2xl:mb-40">
                <business-news-card v-for="item in 4" :key="item" />
            </div>

            <div class="flex items-center justify-center">
                <div class="w-full md:w-auto flex items-center justify-center gap-10 px-24 py-14 rounded-30 border border-green">
                    <p class="text-14 2xl:text-16 font-halvar_breit_700 leading-150 text-green uppercase">больше новостей</p>
                    <img class="w-24 h-24" src="../../assets/icons/arrow-round.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import BusinessNewsCard from '~/components/business/BusinessNewsCard.vue'


export default {
    components: {
        BusinessNewsCard,
    },
}
</script>