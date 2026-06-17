<script setup lang="ts">
import Skill from './Skill.vue';

const props = defineProps<{ experience: WorkExperience; }>();

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
    <div class="card bg-base-100/60 backdrop-blur-md border border-gray-800 shadow-sm
        hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
        transition-all duration-300"
    >
        <div class="card-body">
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center
                        text-primary font-bold text-sm shrink-0"
                >
                    {{ props.experience.place.charAt(0) }}
                </div>
                <div>
                    <div class="font-semibold text-gray-200">{{ props.experience.place }}</div>
                    <div class="text-xs text-gray-500">{{ props.experience.time }}</div>
                </div>
            </div>

            <h3 class="card-title text-lg font-black text-gray-100 mt-3">
                {{ props.experience.title }}
            </h3>

            <ul class="space-y-2 mt-2">
                <li
                    v-for="fn in props.experience.functions"
                    class="text-gray-400 text-sm leading-relaxed pl-4 relative"
                >
                    <span class="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {{ fn }}
                </li>
            </ul>

            <div
                v-if="props.experience.skills?.length"
                class="flex flex-wrap gap-2 mt-4"
            >
                <Skill 
                    v-for="skill in props.experience.skills"
                    :key="skill"
                    :skill="skill"
                />
            </div>
        </div>
    </div>
</template>
