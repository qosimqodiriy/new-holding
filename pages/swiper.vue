<template>
    <div class="my_container">
        <swiper
            :slidesPerView="'auto'"
            :spaceBetween="30"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </div>
</template>


<script>
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Keyboard, Autoplay, FreeMode } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Keyboard, Autoplay, FreeMode ],
        };
    },
};
</script>


<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-color: rebeccapurple;
}

.swiper-slide {
    height: 500px;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 80%;
}

.swiper-slide:nth-child(2n) {
  width: 60%;
}

.swiper-slide:nth-child(3n) {
  width: 40%;
}
</style>