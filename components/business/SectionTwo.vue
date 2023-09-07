<template>
    <div class="bg-white_primary pl-16 md:pl-24 lg:pl-56 xl:pl-150 2xl:pl-120">
        <div class="box p-16 lg:p-24 xl:p-42 2xl:p-32 bg-white rounded-l-16 xl:rounded-l-24 flex flex-col lg:flex-row gap-28 xl:gap-34 2xl:gap-48">
            <!-- Left -->
            <div class="w-full lg:w-335 xl:w-400 2xl:w-670 shrink-0 rounded-8 overflow-hidden">
                <img class="w-full h-auto" src="../../assets/images/inner_img_3.png" alt="">
            </div>

            <!-- Right -->
            <div class="flex-auto ">
                <div class="flex items-stretch gap-14 xl:gap-16 mb-18 xl:mb-24 2xl:mb-32">
                    <div class="w-4 h-auto block rounded-10 bg-green shrink-0"></div>

                    <div>
                        <p class="text-16 2xl:text-18 font-interfaces_600 text-grey_40 mb-12 xl:mb-18">О нас</p>
                        <h2 class="text-18 lg:text-20 xl:text-24 2xl:text-32 font-halvar_breit_700 text-grey">Найдите свое умное и простое решение с лучшей общей экономичной тарифной ставкой!</h2>
                    </div>
                </div>
                <p class="text-16 2xl:text-18 font-interfaces mb-32 2xl:mb-40">Компания  Jahon Invest Plast является ведущим производителем пластмассовых товаров в Узбекистане. Компания предлагает более 300 наименований продукции для дома, сада и народного потребления. Наша продукция широко востребована и экспортируется в Центрально-Азиатские страны, что подтверждает надежность и качество.</p>


                <div class="flex flex-col md:flex-row gap-16 lg:gap-40 mb-24 xl:mb-34 2xl:mb-40">
                    <div class="flex items-start gap-24">
                        <p class="text-42 xl:text-50 2xl:text-72 font-babesNeue min-w-60 text-green uppercase leading-150">04</p>

                        <div class="md:max-w-265">
                            <h3 class="text-18 2xl:text-20 font-interfaces_500 text-black leading-150 mb-8">Производства</h3>
                            <p class="text-16 font-interfaces text-grey_border">Майки, Трусы и Боксеры, Футболки и Безрукавки,Нижнее бельё</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-24">
                        <p class="text-42 xl:text-50 2xl:text-72 font-babesNeue min-w-60 text-green uppercase leading-150">0,98</p>

                        <div class="md:max-w-265">
                            <h3 class="text-18 2xl:text-20 font-interfaces_500 text-black leading-150 mb-8">Тысяч человек</h3>
                            <p class="text-16 font-interfaces text-grey_border">Общая численность сотрудников</p>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-auto inline-flex items-center justify-center gap-10 px-56 py-14 rounded-30 border border-green">
                    <p class="text-16 font-halvar_breit_700 leading-150 text-green uppercase">Подробное</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.box {
    border: 1px solid #F5F5F7;
    box-shadow: -40px 32px 104px 0px rgba(2, 1, 5, 0.08);
    background: url('../../assets/images/inner_earth.png') no-repeat bottom right;
    background-size: 400px;
}



@media (max-width: 1350px) {
    .box {
        background-size: 320px;
    }
}

@media (max-width: 1024px) {
    .box {
        background-size: 300px;
    }
}

@media (max-width: 768px) {
    .box {
        background-size: 280px;
    }
}

</style>