<template>
    <img v-if="cover" class="max-w-full max-h-full cover_img" :src="`https://www.figleaf.uz/files/${src}`" :alt="alt">
    <img v-else :src="`https://www.figleaf.uz/files/${src}`" :alt="alt">
</template>


<script>
export default defineComponent({
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: Object,
            required: false,
        },
        cover: {
            type: Boolean,
            required: false,
        },
    },
})
</script>


<style scoped>
.cover_img {
    max-width: 100%;
    max-height: 515px;
    object-fit: inherit;
}
</style>