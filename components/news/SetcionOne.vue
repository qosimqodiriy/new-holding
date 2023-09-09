<template>
    <div class="py-60 lg:pt-80 2xl:pt-100">
        <div class="my_container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-24">
                <news-card v-for="item in data" :key="item.id" :item="item" />
            </div>

            <Pagination v-if="data_count > 12" :active="Math.trunc(Number($route.query.page)) + 1 || 1" :perPage="12" :items="data_count" @change="(val) => changeQuery('page', (val - 1))" />
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import NewsCard from '../NewsCard.vue';

export default {
    data() {
        return {
            data: [],
            data_count: 0,
            loading: false,
        }
    },

    components: {
        NewsCard,
    },

    methods: {
        async changeQuery(key, value) {
            const query = { ...this.$route.query }
            query[key] = String(value + 1)
            await this.$router.replace({ query })
            this.getItems();
        },



        async getItems() {
            this.loading = true;
            const { page = 1 } = this.$route.query
            const response = await axios.get('https://holdings.pythonanywhere.com/api/news', {
                params: {
                    page: page,
                    page_size: 12,
                },
                headers: {
                    Language: this.$i18n.locale ? this.$i18n.locale : '',
                }
            });
            this.loading = false;
            this.data = response.data.results;
            this.data_count = response.data.count;
        },
    },

    mounted() {
        this.getItems()
    }
}
</script>