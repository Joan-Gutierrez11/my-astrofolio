<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import Card from "@components/vue/Card.vue";

import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { SwiperClass } from "swiper/react";

const { projects, defaultBtnText } = defineProps<{
    projects: Project[],
    defaultBtnText?: string,
    prevBtnText?: string,
    nextBtnText?: string,
}>();

const swiperInstance: Ref<SwiperClass|null> = ref(null);

const onSwiper = (swiper: SwiperClass) => {
    swiperInstance.value = swiper;
};

const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 25 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
};
</script>

<template>
    <div>
        <Swiper
            @swiper="onSwiper"
            :modules="[Autoplay, Pagination, Navigation]"
            :breakpoints="breakpoints"
            :slidesPerView="1"
            :spaceBetween="20"
            :autoplay="{ delay: 5000 }"
            :pagination="{ clickable: true }"
            loop
        >
            <SwiperSlide v-for="project in projects" :key="project.title">
                <Card :project="project" :btnText="defaultBtnText"/>
            </SwiperSlide>
        </Swiper>
        <div class="flex justify-center gap-4 mt-6">
            <button class="btn btn-outline btn-primary" @click="swiperInstance?.slidePrev()">
                &#8592; {{ prevBtnText || 'Anterior' }}
            </button>
            <button class="btn btn-outline btn-primary" @click="swiperInstance?.slideNext()">
                {{ nextBtnText || 'Siguiente' }} &#8594;
            </button>
        </div>
    </div>
</template>
