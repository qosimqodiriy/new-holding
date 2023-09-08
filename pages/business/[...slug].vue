<template>
    <section-one   />
    <section-two   />
    <section-three />
    <section-four  />
    <!-- <section-five  /> -->
    <contact-box   />
    <section-six   />
</template>


<script>
import SectionOne from '~/components/business/SectionOne.vue'
import SectionTwo from '~/components/business/SectionTwo.vue'
import SectionThree from '~/components/business/SectionThree.vue'
import SectionFour from '~/components/business/SectionFour.vue'
import SectionFive from '~/components/business/SectionFive.vue'
import ContactBox from '~/components/business/ContactBox.vue'
import SectionSix from '~/components/business/SectionSix.vue'


export default {
    components: {
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
        ContactBox,
        SectionSix,
    },
}
</script>