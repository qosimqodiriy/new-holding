<template>
    <div class="flex flex-col w-full min-h-200 max-h-500 relative shrink-0 aspect-3/4">
        <img class="w-full h-full max-h-full object-cover object-center" :src="item.image" alt="">

        <div class="box flex-auto border border-grey_40 absolute left-4 md:left-8 right-4 md:right-8 bottom-4 md:bottom-8 p-6 md:p-16">
            <p class=" text-white text-16 md:text-18 xl:text-20 break-all font-interfaces_600 line-clamp-2 font-semibold leading-150 mb-8">{{ item.title ? item.title : 'Null' }}</p>
            <p class=" text-white text-14 md:text-16 xl:text-18 break-all font-interfaces font-normal line-clamp-2 leading-150">{{ item.subtitle ? item.subtitle : 'Null' }}</p>
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



<style scoped>
.box {
    position: absolute;
    backdrop-filter: blur(40px);
    background: rgba(0, 0, 0, 0.16);
}
</style>