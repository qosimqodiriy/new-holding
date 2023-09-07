<template>
    <div class="bg-white py-40">
        <div class="my_container">
            <p class="text-black font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24 lg:mb-32">{{ $t('about_text_1') }}</p>
    
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-16">
                <staff-card v-for="item in data" :key="item.id" :item="item" />
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import StaffCard from './StaffCard.vue';

export default {
    data() {
        return {
            data: [],
            data_count: 0,
        }
    },

    components: {
        StaffCard,
    },

    methods: {
        async getItems() {
            this.loading = true;
            const response = await axios.get('https://holdings.pythonanywhere.com/api/workers', {
                headers: {
                    Language: 'en'
                }
            });
            this.loading = false;
            console.log("Ishchilar");
            console.log(response.data);
            this.data = response.data.results;
            this.data_count = response.data.count;
        },
    },

    mounted() {
        this.getItems()
    }
}
</script>