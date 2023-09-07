<template>
    <div @click="clickShow()" class="card w-full min-h-300 max-h-400 overflow-hidden cursor-pointer" :class="[index % 3 == 2 && index % 6 != 5 ? 'lg:col-span-5' : 'lg:col-span-3', index % 6 == 5 ? 'lg:col-span-3' : '', index % 6 == 0 || index % 6 == 4 ? 'lg:col-span-4': '', index % 3 == 0 ? 'md:col-span-2' : '']">
        <img class="w-full h-full max-h-full object-cover object-center transition-all duration-300" :src="item.image" alt="">
    </div>
</template>



<script>
export default {
    emits: ['onShow'],

    props: {
        index: {
            type: Number,
            required: true,
        },
        item: {
            type: String,
            required: true,
        },
    },

    methods: {
        clickShow() {
            this.$emit('onShow', this.index - 1, 'emit message');
        }
    }
}
</script>


<style scoped>
.card:hover img {
    transition: 0.5s;
    transform: scale(1.2);
}
</style>



<!-- <template>
    <div @click="clickShow()" class="card w-full min-h-300 max-h-400 overflow-hidden cursor-pointer col-span-5" :class="[index % 3 == 2 && index % 6 != 5 ? 'lg:col-span-5' : 'lg:col-span-3', index % 6 == 5 ? 'lg:col-span-3' : '', index % 6 == 0 || index % 6 == 4 ? 'lg:col-span-4': '', index % 3 == 0 ? 'md:col-span-2' : '']">
        <img class="w-full h-full max-h-full object-cover object-center transition-all duration-300" :src="item.image" alt="">
    </div>
</template>



<script>
export default {
    emits: ['onShow'],

    props: {
        index: {
            type: Number,
            required: true,
        },
        item: {
            type: String,
            required: true,
        },
    },

    methods: {
        clickShow() {
            this.$emit('onShow', this.index - 1, 'emit message');
        }
    }
}
</script>


<style scoped>
.card:hover img {
    transition: 0.5s;
    transform: scale(1.2);
}
</style> -->