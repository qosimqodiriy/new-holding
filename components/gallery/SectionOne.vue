<template>
    <div class="py-60 lg:pt-80 2xl:pt-100">
        <div class="my_container">
            <div class="flex flex-wrap items-center justify-center gap-16 mb-32">
                <p @click="typeChange(1, ''     )" class="font-interfaces_500 px-20 md:px-24 lg:px-28 xl:px-32 py-8 md:py-10 xl:py-12 rounded-20 lg:rounded-30 border cursor-pointer" :class="tab_active == 1 ? 'border-facebook-blue text-facebook-blue' : 'border-grey_border text-black'">{{ $t('gallery_text_1') }}</p>
                <p @click="typeChange(2, 'image')" class="font-interfaces_500 px-20 md:px-24 lg:px-28 xl:px-32 py-8 md:py-10 xl:py-12 rounded-20 lg:rounded-30 border cursor-pointer" :class="tab_active == 2 ? 'border-facebook-blue text-facebook-blue' : 'border-grey_border text-black'">{{ $t('gallery_text_2') }}</p>
                <p @click="typeChange(3, 'video')" class="font-interfaces_500 px-20 md:px-24 lg:px-28 xl:px-32 py-8 md:py-10 xl:py-12 rounded-20 lg:rounded-30 border cursor-pointer" :class="tab_active == 3 ? 'border-facebook-blue text-facebook-blue' : 'border-grey_border text-black'">{{ $t('gallery_text_3') }}</p>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-24">
                <gallery-inner-card v-for="(item, index) in images" :key="index" :item="item" :index="index + 1" @onShow="openPopUp" />
            </div>

            <div v-if="onOpen" class="onOpen fixed top-0 left-0 w-full h-screen overflow-hidden">
                <img class="w-full h-full object-cover object-center" :src="images[active].image" alt="">
                <div class="image_box absolute top-0 left-0 flex items-center justify-center w-full h-full">
                    <div class="image_box_inner w-90% md:w-80% h-90% flex items-center justify-center relative">
                        <div class="w-full h-full relative" :class="onOpen ? 'z-0 scale-100 animate-blowUp' : ''">
                            <img class="swiper_img max-w-full max-h-full w-full h-full object-contain" :src="images[active].image" alt="">

                            <img @click="onOpen = false" class="w-36 h-36 md:w-40 md:h-40 lg:w-45 lg:-45 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80 absolute -top-30 -lg:top-40 -right-10 md:-right-60 lg:-right-80 cursor-pointer" src="../../assets/icons/close-white.png" alt="">
                        </div>
                    </div>
                </div>

                <div @click="prevClick()" class="change_btn absolute z-20 top-50% left-10 md:left-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer flex items-center justify-center rounded-full border border-grey_border">
                    <img class="w-24 h-24" src="../../assets/icons/arrow-left-white.png" alt="">
                </div>

                <div @click="nextClick()" class="change_btn absolute z-20 top-50% right-10 md:right-25 -translate-y-50% w-40 md:w-56 h-40 md:h-56 cursor-pointer flex items-center justify-center rounded-full border border-grey_border">
                    <img class="w-24 h-24" src="../../assets/icons/arrow-right-white.png" alt="">
                </div>
            </div>

            <Pagination v-if="data_count > 10" :active="Math.trunc(Number($route.query.page)) + 1 || 1" :perPage="9" :items="data_count" @change="(val) => changeQuery('page', (val - 1))" />
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import GalleryInnerCard from './GallaryCard.vue';

export default {
    data() {
        return {
            type: '',
            active: 0,
            images: [],
            tab_active: 1,
            onOpen: false,
            data_count: 0,
            loading: false,
        }
    },

    components: {
        GalleryInnerCard,
    },

    methods: {
        async typeChange(number, type) {
            this.type = type;
            this.tab_active = number;

            if(type != '')  await this.$router.replace({'query': {'type': type}});
            else await this.$router.replace(this.$route.path)

            this.getItems()
        },

        async changeQuery(key, value) {
            const query = { ...this.$route.query }
            query[key] = String(value + 1);
            await this.$router.replace({ query })
            this.getItems()
        },

        async getItems() {
            this.loading = true;
            const { page = 1 } = this.$route.query
            const response = await axios.get('https://holdings.pythonanywhere.com/api/media', {
                params: {
                    page: page,
                    page_size: 9,
                    type: this.type,
                },
                headers: {
                    Language: this.$i18n.locale ? this.$i18n.locale : '',
                }
            });
            this.loading = false;
            this.images = response.data.results;
            this.data_count = response.data.count;
        },

        openPopUp(index, src) {
            this.onOpen = true;
            this.active = index;
        },

        prevClick() {
            this.active = this.active > 0 ? this.active - 1 : this.images.length - 1;
        },

        nextClick() {
            this.active = this.active < this.images.length - 1 ? this.active + 1 : 0;
        }
    },

    mounted() {
        if(this.$route.query.type == '') {
            this.type = '';
            this.tab_active = 1;
        } else if(this.$route.query.type == 'image') {
            this.tab_active = 2;
            this.type = 'image';
        } else if(this.$route.query.type == 'video') {
            this.tab_active = 3;
            this.type = 'video';
        }

        this.getItems()
        document.addEventListener('keydown', evt => {
            if(this.onOpen == true) {
                if(evt.key == 'ArrowLeft') this.prevClick();
                else if(evt.key == 'ArrowRight') this.nextClick()
                else if(evt.key == 'Escape') this.onOpen = false;
            }
        });
    }
}
</script>


<style scoped>
.onOpen {
    z-index: 60;
}
.image_box {
    backdrop-filter: blur(12px);
    background: rgba(10, 27, 51, 0.40);
}

.change_btn {
    backdrop-filter: blur(8px);
    background: rgba(2, 1, 5, 0.16);
}
</style>