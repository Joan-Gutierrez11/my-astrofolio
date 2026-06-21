<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import Typed from 'typed.js';

const props = defineProps<{
    texts?: string[];
    pretext: string;
}>();

// Typed instance
let typed: Typed | null = null;

onMounted(() => {
    typed = new Typed('#typed-element', {
        strings: props.texts ?? ['Fullstack developer', 'Data Engineer'],
        typeSpeed: 90,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        cursorChar: '█',
    })
});

onUnmounted(() => typed?.destroy());
</script>
<template>
    <p class="text-xl text-gray-300">
        <span>$</span> 
        {{ (props.pretext ?? 'Hola, soy') + ' ' }}
        <span id="typed-element" class="text-primary"></span>
    </p>
</template>
