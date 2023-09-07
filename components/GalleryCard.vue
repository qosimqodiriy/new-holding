<template>
    <div class="w-auto h-full relative">
        <img class="w-auto h-full" :src="item.image ? item.image : ''" alt="">

        <div class="absolute top-12 left-12 right-12 bottom-12 px-28 py-20 flex items-end border border-purple">
            <p class="text-16 md:text-18 xl:text-20 text-white font-interfaces_600 font-semibold leading-140">{{ item.title ? item.title : '' }}</p>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>