<template>
    <div class="bg-white py-40">
        <div class="my_container">
            <p class="text-black font-interfaces_600 font-semibold text-24 lg:text-28 xl:text-32 2xl:text-40 mb-24 lg:mb-32">{{ $t('about_text_1') }}</p>
    
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-16 mb-24">
                <staff-card v-for="item in show_data" :key="item.id" :item="item" />
            </div>

            <div v-if="mobile" class="flex items-center justify-center">
                <div @click="showStaffs()" class="inline-flex items-center gap-8 cursor-pointer">
                    <p class="text-16 font-interfaces_600 text-black ">{{ $t('about_text_3') }}</p>
                    <img class="w-24 h-24 transition-all duration-200" :class="isOpen ? 'rotate-180' : ''" src="../../assets/icons/arrow-down-black.png" alt="">
                </div>
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
            show_data: [],
            mobile: false,
            isOpen: false,
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
                    Language: this.$i18n.locale ? this.$i18n.locale : '',
                }
            });
            this.loading = false;
            this.data = response.data.results;
            this.data_count = response.data.count;

            if(window.innerWidth > 768) {
                this.show_data = this.data;
            } else {
                this.mobile = true;
                this.show_data = this.data.slice(0, 4);
            }
        },

        showStaffs() {
            this.isOpen = !this.isOpen;
            this.show_data = this.isOpen ? this.data : this.data.slice(0, 4);
        }
    },

    mounted() {
        this.getItems()

        window.addEventListener('resize', () => {
            this.mobile = window.innerWidth < 769 ? true : false;
            this.show_data = window.innerWidth < 769 ? this.data.slice(0, 4) : this.data;
        })
    }
}
</script>