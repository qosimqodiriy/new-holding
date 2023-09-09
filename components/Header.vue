<template>
    <header id="header" class="top-0 z-50 py-15 md:py-20 xl:py-24 border-b border-b-grey_40" :class="$route.path == '/' || this.$route.name == 'business-slug' ? 'fixed' : 'sticky'">
        <div class="my_container flex items-center justify-between">
            <div class="flex items-center gap-5">
                <div @click="burger = true" class="block lg:hidden px-16 py-14 rounded-8 bg-purple cursor-pointer">
                    <img class="w-16" src="../assets/icons/menu.png" alt="">
                </div>

                <NuxtLink to="/" class="flex items-center gap-2">
                    <!-- <img class="w-68" src="../assets/images/logo_img.gif" alt=""> -->
                    <img v-if="color == 'white'" class="w-68" src="../assets/images/logo_earth_white.png" alt="">
                    <img v-else class="w-68" src="../assets/images/logo_earth_purple.png" alt="">
                    <img v-if="color == 'white'" class="w-78" src="../assets/images/logo_name.png" alt="">
                    <img v-else class="w-78" src="../assets/images/logo_name_blue.png" alt="">
                </NuxtLink>
            </div>
    
            <div class="hidden lg:flex gap-20 xl:gap-30 2xl:gap-40">
                <NuxtLink to="/"        class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">{{ $t('page_name_1') }}</NuxtLink>
                <NuxtLink to="/about"   class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">{{ $t('page_name_2') }}</NuxtLink>
                <NuxtLink to="/holdings" class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">{{ $t('page_name_3') }}</NuxtLink>
                <NuxtLink to="/gallery" class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">{{ $t('page_name_4') }}</NuxtLink>
                <NuxtLink to="/news"    class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">{{ $t('page_name_5') }}</NuxtLink>
                <NuxtLink to="/contact" class="text-18 font-interfaces font-medium leading-150" :class="`text-${color}`">{{ $t('page_name_6') }}</NuxtLink>
            </div>
    
            <div class="relative px-15">
                <div class="relative flex items-center gap-4 z-10 cursor-pointer" @click="lang = !lang">
                    <p class="font-inter font-medium leading-150" :class="`text-${color}`">{{ lang_value }}</p>
                    <img v-if="color == 'white'" class="w-24 h-24" src="../assets/icons/arrow-down.png" alt="">
                    <img v-else class="w-24 h-24" src="../assets/icons/arrow-down-black.png" alt="">
                </div>

                <div class="language_box flex flex-col gap-8 absolute top-0 left-0 px-15 py-10  border border-grey_40 rounded-4" :class="[`bg-${bg_color}`, lang ? 'active' : 'not_active',]">
                    <p @click="changeLang('ru', `Русский`)" :class="`text-${color} cursor-pointer leading-110`">Русский</p>
                    <p @click="changeLang('en', `English`)" :class="`text-${color} cursor-pointer leading-110`">English</p>
                    <p @click="changeLang('uz', `O'zbekcha`)" :class="`text-${color} cursor-pointer leading-110`">O'zbekcha</p>
                </div>
            </div>


        </div>

        <!-- Burger -->
        <div class="burger_div w-full min-h-screen fixed lg:hidden overflow-hidden top-0 right-0 z-40" :class="burger ? 'active' : ''">
            <div @click="burger = false" class="w-full z-40 min-h-screen absolute top-0 left-0"></div>
            <div class="w-80% burger_bg bg-Rich-Black z-50 min-h-screen absolute top-0 left-0 px-16 py-50">

                <div class="flex items-center gap-20 mb-76">
                    <img @click="burger = false" class="w-24 h-24" src="../assets/icons/close-white.png" alt="">
                    <p class="w-full text-20 text-center font-medium pr-44 text-white">Меню</p>
                </div>

                <div class="flex flex-col gap-16">
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/about">{{ $t('page_name_2') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/holdings">{{ $t('page_name_3') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/gallery">{{ $t('page_name_4') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/news">{{ $t('page_name_5') }}</NuxtLink>
                    <NuxtLink @click="burger = false" class="font-interfaces text-18 font-semibold text-white" to="/contact">{{ $t('page_name_6') }}</NuxtLink>
                </div>

                
            </div>
        </div>
    </header>
</template>


<script>
export default {
    data() {
        return {
            path: '',
            load: false,
            lang: false,
            burger: false,
            color: 'white',
            bg_color: 'black',
            lang_value: `O'zbekcha`,
        }
    },

    watch: {
        $route() {
            this.load = true;
            this.path = this.$route.path;
            let navbar = document.querySelector('#header')
            
            setTimeout(() => {
                if(this.$route.path == '/' || this.$route.path == '/about'|| this.$route.path == '/holdings' || this.$route.name == 'business-slug') {
                    this.color = 'white';
                    this.bg_color = 'black';
                    sessionStorage.setItem('color', 'white');
                    sessionStorage.setItem('bg_color', 'black');
                } else {
                    this.color = 'black';
                    this.bg_color = 'white';
                    sessionStorage.setItem('color', 'black');
                    sessionStorage.setItem('bg_color', 'white');
                }

                // if(window.pageYOffset == 0) {
                //     navbar.style.backgroundColor = 'transparent';
                // } else {
                //     navbar.style.backgroundColor = `${sessionStorage.getItem('bg_color')}`;
                // }
            }, 10);
        },
    },

    methods: {
        changeLang(lang_code, text) {
            this.lang = false;
            if(localStorage.getItem('language') != lang_code) {
                this.lang_value = text;
                this.$i18n.locale = lang_code;
                localStorage.setItem('language', lang_code);
                window.location.reload();
            }
        },
    },
    
    mounted() {
        this.load = true;
        this.path = this.$route.path;

        if(this.$route.path == '/' || this.$route.path == '/about'|| this.$route.path == '/holdings' || this.$route.name == 'business-slug') {
            this.color = 'white';
            this.bg_color = 'black';
            sessionStorage.setItem('color', 'white');
            sessionStorage.setItem('bg_color', 'black');
        } else {
            this.color = 'black';
            this.bg_color = 'white';
            sessionStorage.setItem('color', 'black');
            sessionStorage.setItem('bg_color', 'white');
        }

        // Tilni tekshirish
        if(localStorage.getItem('language') == 'uz') {
            this.lang_value = `Ozbekcha`
        } else if(localStorage.getItem('language') == 'en') {
            this.lang_value = `English`
        } else if(localStorage.getItem('language') == 'ru') {
            this.lang_value = `Русский`
        } else {
            this.lang_value = `Русский`
        }



        // Header anime
        let lastScrollTop = 105;
        let navbar = document.querySelector('#header')

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if(this.$route.path == '/' || this.$route.path == '/about'|| this.$route.path == '/holdings' || this.$route.name == 'business-slug') {
                sessionStorage.setItem('color', 'white');
                sessionStorage.setItem('bg_color', 'black');
            } else {
                sessionStorage.setItem('color', 'black');
                sessionStorage.setItem('bg_color', 'white');
            }
            
            if(scrollTop > lastScrollTop) {
                navbar.style.top = '-105px';
                navbar.classList.remove(sessionStorage.getItem('bg_color'))
            } else {
                navbar.style.top = '0';
                if(window.pageYOffset == 0) {
                    navbar.style.backgroundColor = 'transparent';
                } else {
                    navbar.style.backgroundColor = `${sessionStorage.getItem('bg_color')}`;
                    // navbar.style.backgroundColor = 'red';
                }
            }

            lastScrollTop = scrollTop
        })
    }
}
</script>

<style scoped>
#header {
    width: 100%;
    transition: 0.5s;
    transition-duration: 150;
}

.lang_box {
    cursor: pointer !important;
}

.language_box {
    min-width: 100%;
    transition: 0.5s;
    /* left: 0; */
    /* right: auto; */
}

.language_box.active {
    opacity: 1;
    z-index: 2;
    transform: translateY(30px);
}

.language_box.not_active {
    opacity: 0;
    z-index: -1;
    transform: translateY(0px);
}




/* Burger css */

.burger_div {
    transition: 0.5s ease;
    transform: translateX(-1024px);
}

.burger_div.active {
    transform: translateX(0px);
}

.burger_bg {
    backdrop-filter: blur(10px);
    background: linear-gradient(5deg,
    rgba(17, 17, 18, 0) 10%,
    rgba(0, 0, 0, 0.8) 100%);
    background: #020105;
}
</style>