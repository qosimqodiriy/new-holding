<template>
    <div class="py-60 pt-80 lg:pt-100">
        <div class="my_container">
            <div class="space-y-32">
                <ProjectCard v-for="(item, index) in holdings" :key="index" :index="index" :item="item" :link="true" :last="index == holdings.length - 1 && business.length == 0 ? true : false"></ProjectCard>
                <ProjectCard v-for="(item, index) in business" :key="index" :index="holdings.length + index" :item="item" :link="fasle" :last="index == business.length - 1 ? true : false"></ProjectCard>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'

export default {
    data() {
        return {
            holdings: [],
            business: [],
            data_count: 0,
            loading: false,
        }
    },

    components: {
        ProjectCard,
    },

    methods: {
        async getHoldings() {
            this.loading = true;
            const response = await axios.get('https://holdings.pythonanywhere.com/api/holdings', {
                headers: {
                    Language: this.$i18n.locale ? this.$i18n.locale : '',
                }
            });
            this.loading = false;
            this.holdings = response.data.results;
            this.data_count = response.data.count;
        },

        async getBusiness() {
            this.loading = true;
            const response = await axios.get('https://holdings.pythonanywhere.com/api/business', {
                headers: {
                    Language: this.$i18n.locale ? this.$i18n.locale : '',
                }
            });
            this.loading = false;
            this.business = response.data.results;
            this.data_count = response.data.count;
        },
    },

    mounted() {
        this.getHoldings()
        this.getBusiness()
    }
}
</script>