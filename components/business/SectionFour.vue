<template>
    <div class="section py-34 md:py-40 lg:py-46 xl:py-56 2xl:py-80">
        <div class="my_container">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div class="">
                    <img class="w-full rounded-16 border border-white_primary mb-16 lg:mb-24" src="../../assets/images/inner_img_1.png" alt="">
                    <h2 class="text-20 xl:text-20 2xl:text-24 font-halvar_breit_700 text-green mb-14 lg:mb-16">{{ $t('inner_text_13') }}</h2>

                    <p class="text-16 2xl:text-18 font-interfaces text-grey_border max-w-624">{{ $t('inner_text_14') }}</p>
                </div>

                <div class="relative w-full rounded-16 border border-grey_8 overflow-hidden">
                    <img class="w-full h-auto" src="../../assets/images/inner_img_2.png" alt="">

                    <div class="absolute top-24 left-24 flex items-center gap-12">
                        <img class="w-24 h-24" src="../../assets/icons/arrow-left-grey.png" alt="">
                        <p class="text-16 font-interfaces_500 text-grey_border">{{ $t('inner_text_13') }}</p>
                    </div>

                    <div class="absolute bottom-14 lg:bottom-24 left-24 flex items-center gap-4">
                        <p class="text-16 font-interfaces_500 text-grey_40">{{ $t('inner_text_15') }}</p>
                        <p class="text-16 font-interfaces_500 text-black">- 3 {{ $t('count') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.section {
    background-color: #F5F7FA;
}
</style>