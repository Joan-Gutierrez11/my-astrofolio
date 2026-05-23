<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{ text: string }>();

const displayText = ref('')
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

let interval: ReturnType<typeof setInterval> | null = null;
let frame = 0;
const revealSpeed = 5;
const frameDelay = 50;

function randomChar(): string {
    return chars[Math.floor(Math.random() * chars.length)];
}

onMounted(() => {
    displayText.value = props.text.split('').map(() => randomChar()).join('');

    interval = setInterval(() => {
        frame++;
        const revealed = Math.min(Math.floor(frame / revealSpeed), props.text.length);

        displayText.value = props.text.split('').map((char, i) => {
            if (i < revealed) return char;
            return randomChar();
        }).join('');

        if (revealed >= props.text.length && interval) {
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
