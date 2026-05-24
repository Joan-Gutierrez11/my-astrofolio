<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import Card from "@components/vue/Card.vue";

import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const { projects } = defineProps<{ 
    projects: Project[],
    defaultBtnText?: string
}>();

const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 25 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
};
</script>
<template>
    <Swiper
        :modules="[ Autoplay, Pagination ]"
        :breakpoints="breakpoints"
        :slidesPerView="1"
        :spaceBetween="20"
        :autoplay="{ delay: 2000 }"
        :pagination="{ clickable: true }"
        loop
    >
        <SwiperSlide v-for="project in projects" :key="project.title">
            <Card :project="project" :btnText="defaultBtnText"/>
        </SwiperSlide>
    </Swiper>
</template>
