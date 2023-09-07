<template>
    <NuxtLink :to="`/news/${item.slug}`" class="flex flex-col p-16 2xl:p-24 gap-14 lg:gap-16" :class="`bg-${bg_color}`">
        <p class="text-16 lg:text-18 font-interfaces text-grey_border">{{ formatDate(item.date ? item.date : null, 2) }}</p>
        <p :class="[`text-16 lg:text-18 2xl:text-20 text-${color} break-all flex-auto`, line_clamp ? 'line-clamp-1' : 'line-clamp-3']">{{ item.title }}</p>

        <img class="w-full aspect-1/1 object-cover object-center" :src="item.image" alt="">
    </NuxtLink>
</template>



<script>
export default {

    data() {
        return {
            color: '',
            bg_color: '',
        }
    },

    props: {
        item: {
            type: Object,
            required: true,
        },
        line_clamp: {
            type: Boolean,
            required: false,
        },
    },

    methods: {
        formatDate(date, type) {
            if(date) {
                let time = date.slice(0, 5)
                let day = date.slice(8, date.length)

                if(type == 1) return time
                else if(type == 2) return day
                else return 'Typeni xato kiritdingiz'
            } else return null
        }
    },

    mounted() {
        setTimeout(() => {
            this.color = sessionStorage.getItem('color');
            this.bg_color = sessionStorage.getItem('bg_color')
        }, 100);

    }
}
</script>




<style scoped>
.bg-black {
    border-radius: 4px;
    background: #18171B;
    border: 1px solid #353437;
    backdrop-filter: blur(26.5px);
}

.bg-white {
    border-radius: 4px;
    background: #FFF;
    border: 1px solid #EBEBEB;
    backdrop-filter: blur(26.5px);
}
</style>