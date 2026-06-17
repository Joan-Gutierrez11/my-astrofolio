<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const { text, revealSpeed = 5, frameDelay = 50 } = defineProps<{ 
    text: string, 
    revealSpeed?: number,
    frameDelay?: number
}>();

const displayText = ref('')
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let interval: ReturnType<typeof setInterval> | null = null;
let frame = 0;

function randomChar(): string {
    return chars[Math.floor(Math.random() * chars.length)];
}

function randomWord(length: number): string {
    return Array.from({ length }, () => randomChar()).join('');
}

onMounted(() => {
    const words = text.split(' ');
    displayText.value = words.map(w => randomWord(w.length)).join(' ');

    interval = setInterval(() => {
        frame++;
        const revealed = Math.min(Math.floor(frame / revealSpeed), words.length);

        displayText.value = words.map((word, i) => {
            if (i < revealed) return word;
            return randomWord(word.length);
        }).join(' ');

        if (revealed >= words.length && interval) {
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
