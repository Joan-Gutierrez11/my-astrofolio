<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const { text, revealSpeed = 5, frameDelay = 50 } = defineProps<{ 
    text: string, 
    revealSpeed?: number,
    frameDelay?: number
}>();

const displayText = ref('')
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

let interval: ReturnType<typeof setInterval> | null = null;
let frame = 0;

function randomChar(): string {
    return chars[Math.floor(Math.random() * chars.length)];
}

onMounted(() => {
    displayText.value = text.split('').map(() => randomChar()).join('');

    interval = setInterval(() => {
        frame++;
        const revealed = Math.min(Math.floor(frame / revealSpeed), text.length);

        displayText.value = text.split('').map((char, i) => {
            if (i < revealed) return char;
            return randomChar();
        }).join('');

        if (revealed >= text.length && interval) {
            clearInterval(interval);
            interval = null;
        }
    }, frameDelay);
})

onUnmounted(() => {
    if (interval) clearInterval(interval);
})
</script>

<template>
    <span>{{ displayText }}</span>
</template>
