<template>
    <div class="py-60 bg-white">
        <page-title :name="$t('page_title_4')" />
        <section-one />
    </div>
</template>



<script>
import SectionOne from '../../components/news/SetcionOne.vue';

export default {

    components: {
        SectionOne,
    },
}
</script>



<style scoped>
* {
    transition: 0s;
}
</style>