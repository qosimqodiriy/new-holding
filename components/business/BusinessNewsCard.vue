<template>
    <div class="w-full">
        <img class="w-full h-180 2xl:h-280 object-cover object-center rounded-16 mb-12 2xl:mb-24 overflow-hidden" src="../../assets/images/img_1.png" alt="">

        <div class="flex items-center gap-24 xl:gap-32 mb-10">
            <div class="flex items-center gap-8">
                <img class="w-24 h-24" src="../../assets/icons/calendar.png" alt="">
                <p class="text-14 font-interfaces text-grey_2">16.05.2023</p>
                <!-- <p class="font-interfaces text-grey_40">{{ formatDate(data.date, 2) }}</p> -->
            </div>
            <div class="flex items-center gap-8">
                <img class="w-24 h-24" src="../../assets/icons/eye.png" alt="">
                <p class="font-interfaces text-grey_2">efw</p>
                <!-- <p class="font-interfaces text-grey_40">{{ data.views }}</p> -->
            </div>
        </div>

        <h2 class="text-16 lg:text-14 2xl:text-18 font-interfaces_500 text-black mb-14 lg:mb-16 2xl:mb-24">ЕТБга аъзолик эҳтимоли, Ўзбекистонга келаётган Mastercard ва Exeed — иқтисодий таймлайн</h2>
        
        <div class="flex items-center gap-4">
            <p class="text-14 font-halvar_breit_700 text-grey_border">Подробнее</p>
            <img class="w-20 h-20" src="../../assets/icons/chevron-right.png" alt="">
        </div>
    </div>
</template>



<script>
export default {
    

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
}
</script>