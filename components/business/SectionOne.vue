<template>
    <section class="section_one flex flex-col relative">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <img class="w-full h-full object-cover object-center" src="../../assets/images/business_inner_bg.png" />
        </div>
        <div class="my_container flex items-center relative z-10 flex-auto pt-140 lg:pt-156 2xl:pt-180 pb-30 lg:pb-40 2xl:pb-50">
            <div class="max-w-600 xl:max-w-762 w-full h-full md:h-auto flex flex-col">
                <h2 class="text-26 md:text-30 lg:text-36 xl:text-46 2xl:text-56 text-white font-halvar_breit_700 mb-24">{{ $t('inner_text_1') }}</h2>
                <p class="text-16 font-interfaces 2xl:text-18 text-grey_8 max-w-600 mb-auto md:mb-32">{{ $t('inner_text_2') }}</p>

                <div class="flex items-center gap-20">
                    <div class="circle w-40 h-40 md:w-50 md:h-50 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-100 2xl:h-100 flex items-center justify-center rounded-full border-2 border-green">
                        <img class="animate-bounce w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24 2xl:w-30 2xl:h-30" src="../../assets/icons/arrow-down-green.png" alt="">
                    </div>
                    <p class="text-16 2xl:text-18 text-white font-interfaces">{{ $t('inner_text_3') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        
    },
    
    mounted() {
        console.log(this.$route);

        // this.color = 'white';
        // this.bg_color = 'black';
        // sessionStorage.setItem('color', 'white');
        // sessionStorage.setItem('bg_color', 'black');
    }
}
</script>



<style scoped>
.section_one {
    width: 100%;
    height: 100vh;
    /* background: #020105 url('../../assets/images/img_3.png') no-repeat center fixed; */
    /* background-size: cover; */
    background: linear-gradient(180deg, #0A0A10 0%, rgba(10, 10, 16, 0.00) 100%);
}
</style>