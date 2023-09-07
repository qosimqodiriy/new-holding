<template>
    <section class="section_one flex flex-col relative">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <video class="w-full h-full object-cover object-center" muted autoplay loop src="../../assets/video/background.mp4"></video>
        </div>
        <div class="my_container relative z-10 flex-auto pt-140 lg:pt-156 2xl:pt-180 pb-30 lg:pb-40 2xl:pb-50">
            <div class="flex flex-col w-full h-full">
                <p class="text-white text-32 md:text-40 lg:text-50 xl:text-56 2xl:text-72 text-center font-interfaces font-bold leading-150 mb-auto">Jahon Invest Holding</p>

                <div class="grid grid-cols-2 lg:grid-cols-4 md:border border-grey gap-8 lg:gap-0">
                    <div class="flex items-center justify-center py-30 md:py-46 lg:py-64 2xl:py-90 px-20 border border-grey">
                        <p class="text-white text-16 font-interfaces md:font-medium lg:font-semibold md:text-20 lg:text-24 2xl:text-28 text-center">Premium Pipe Print</p>
                    </div>
                    <div class="flex items-center justify-center py-30 md:py-46 lg:py-64 2xl:py-90 px-20 border border-grey">
                        <p class="text-white text-16 font-interfaces md:font-medium lg:font-semibold md:text-20 lg:text-24 2xl:text-28 text-center">JIP (Jahon Invest Plast)</p>
                    </div>
                    <div class="flex items-center justify-center py-30 md:py-46 lg:py-64 2xl:py-90 px-20 border border-grey">
                        <p class="text-white text-16 font-interfaces md:font-medium lg:font-semibold md:text-20 lg:text-24 2xl:text-28 text-center">Modern City</p>
                    </div>
                    <div class="flex items-center justify-center py-30 md:py-46 lg:py-64 2xl:py-90 px-20 border border-grey">
                        <p class="text-white text-16 font-interfaces md:font-medium lg:font-semibold md:text-20 lg:text-24 2xl:text-28 text-center">Заправка</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>
.section_one {
    width: 100%;
    height: 100vh;
    /* background: #020105 url('../../assets/images/img_3.png') no-repeat center fixed; */
    /* background-size: cover; */
    /* background: linear-gradient(180deg, #0A0A10 0%, rgba(10, 10, 16, 0.00) 100%); */
}

.title {
    font-size: 72px;
    font-weight: 700;
    text-shadow: 0 0 3px rgba(0,0,0,1);
}

.text {
    text-shadow: 0 0 2px rgba(0,0,0,1);
}

@media (max-width: 1350px) {
    .title {
        font-size: 64px;
    }
}

@media (max-width: 1024px) {
    .title {
        font-size: 48px;
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 32px;
    }
}
</style>