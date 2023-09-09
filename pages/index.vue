<template>
    <Head>
        <Title>{{ title }}</Title>
        
        <meta property="type" content="website">
        <meta property="og:type" content="website">
        
        <meta name="keywords" :content="keywords" />
        <meta name="og:keywords" :content="keywords" />
        
        <meta name="description" :content="description" />
        <meta name="og:description" :content="description" />
        
        <meta property="url" content="https://holdings.pythonanywhere.com">
        <meta property="og:url" content="https://holdings.pythonanywhere.com">
        
        <meta property="image" content="https://holdings.pythonanywhere.com/media/dropzone/business_multiple/2023/9/9/1694258864273484.png.900x900_q85.webp">
        <meta property="og:image" content="https://holdings.pythonanywhere.com/media/dropzone/business_multiple/2023/9/9/1694258864273484.png.900x900_q85.webp">
    </Head>

    <section-one />
    <section-two color="black" bg_color="white" />
    <section-three />
    <section-four />
</template>

<script>
import axios from 'axios'
import SectionOne from '~/components/index/SectionOne.vue'
import SectionTwo from '~/components/index/SectionTwo.vue'
import SectionFour from '~/components/index/SectionFour.vue'
import SectionThree from '~/components/index/SectionThree.vue'


export default {
    data() {
        return {
            data: {},
            loading: false,
            title: "Jahon Invest Holding",
            keywords: "Jahon Invest Holding, Jahon invest, Holding.",
            description: "Yillar davomida JIP o'zini ishonchli va mas'uliyatli ishlab chiqaruvchi sifatida ko'rsatdi, uning mahsulotlariga ishonchingiz komil bo'ladi. Bugungi kunda korxona Markaziy Osiyodagi eng yirik avtomatlashtirilgan ishlab chiqarish majmualaridan biriga ega.",
        }
    },

    components: {
        SectionOne,
        SectionTwo,
        SectionFour,
        SectionThree,
    },

    methods: {
        async getItems() { 
            this.loading = true;
            const response = await axios.get('https://holdings.pythonanywhere.com/api/static_infos', {
                headers: {
                    Language: this.$i18n.locale ? this.$i18n.locale : '',
                }
            });
            this.loading = false;
            this.data = response.data;

            this.title = response.title ? response.title : "Jahon Invest Holding";
            this.keywords = response.meta_title ? response.meta_title : "Jahon Invest Holding, Jahon invest, Holding.";
            this.description = response.description ? response.description : "Yillar davomida JIP o'zini ishonchli va mas'uliyatli ishlab chiqaruvchi sifatida ko'rsatdi, uning mahsulotlariga ishonchingiz komil bo'ladi. Bugungi kunda korxona Markaziy Osiyodagi eng yirik avtomatlashtirilgan ishlab chiqarish majmualaridan biriga ega.";
        },
    },

    async mounted() {
        this.getItems();
    }
}
</script>