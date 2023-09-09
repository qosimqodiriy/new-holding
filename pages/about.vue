<template>
    <div class="py-60 bg-black">
        <page-title :name="$t('page_title_1')" />
        <section-one color="white" bg_color="black" />
        <section-two></section-two>
        <section-three></section-three>
    </div>
</template>



<script>
import SectionOne from '../components/index/SectionTwo.vue';
import SectionTwo from '../components/about/SectionTwo.vue';
import SectionThree from '../components/about/SectionThree.vue';

export default {
    components: {
        SectionOne,
        SectionTwo,
        SectionThree,
    },
}
</script>