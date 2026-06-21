<script setup lang="ts">
import { capitalize } from "@utils/utilities";

const { skill, color = 'primary' } = defineProps<{ 
    skill: string, 
    color?: string
}>();

const textColor = color === 'primary' ? 'text-primary' : 'text-gray-200';
</script>
<template>
    <span
        class="badge badge-soft badge-lg tooltip"
        :data-tip="capitalize(skill)"
    >
        <i :class="'devicon-' + skill + '-plain text-lg ' + textColor"></i>
    </span>
</template>
