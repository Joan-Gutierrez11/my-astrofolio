<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue';

const props = defineProps<{
    experience: WorkExperience[];
    currentLabel?: string;
}>();

const containerRef = ref<HTMLElement | null>(null);
const visible = reactive<Record<number, boolean>>({});
let observer: IntersectionObserver | null = null;

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const idx = Number((entry.target as HTMLElement).dataset.index);
                visible[idx] = true;
                observer?.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    nextTick(() => {
        containerRef.value?.querySelectorAll('[data-index]').forEach((el) => {
            observer?.observe(el);
        });
    });
});

onBeforeUnmount(() => observer?.disconnect());

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
    <div ref="containerRef" class="relative">
        <div class="absolute left-4.5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/40 via-primary/20 to-gray-800"></div>

        <div
            v-for="(item, i) in props.experience"
            :key="i"
            class="relative mb-10 md:mb-16 last:mb-0"
        >
            <div
                :data-index="i"
                class="flex items-start transition-all duration-700 ease-out"
                :class="visible[i]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'"
            >
                <div class="hidden md:block w-1/2" :class="i % 2 === 0 ? 'pr-10 text-right' : 'pl-10 order-2'">
                    <div v-if="i % 2 === 0" class="card">
                        <div class="flex items-start justify-end gap-3 mb-3">
                            <div class="text-right">
                                <div class="font-semibold text-gray-200">{{ item.place }}</div>
                                <div class="text-xs text-gray-500">{{ item.time }}</div>
                            </div>
                            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                                {{ item.place.charAt(0) }}
                            </div>
                        </div>
                        <h3 class="text-lg font-black text-gray-100 mb-3">{{ item.title }}</h3>
                        <ul class="space-y-2">
                            <li v-for="fn in item.functions" class="text-gray-400 text-sm leading-relaxed">
                                {{ fn }}
                            </li>
                        </ul>
                        <div v-if="item.skills?.length" class="flex flex-wrap gap-2 mt-4 justify-end">
                            <span
                                v-for="skill in item.skills"
                                :key="skill"
                                class="badge badge-soft badge-lg tooltip"
                                :data-tip="capitalize(skill)"
                            >
                                <i :class="'devicon-' + skill + '-plain text-lg text-gray-200'"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="flex md:hidden flex-1 ml-10">
                    <div class="card w-full">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                                {{ item.place.charAt(0) }}
                            </div>
                            <div>
                                <div class="font-semibold text-gray-200">{{ item.place }}</div>
                                <div class="text-xs text-gray-500">{{ item.time }}</div>
                            </div>
                        </div>
                        <h3 class="text-lg font-black text-gray-100 mb-3">{{ item.title }}</h3>
                        <ul class="space-y-2">
                            <li v-for="fn in item.functions" class="text-gray-400 text-sm leading-relaxed pl-4 relative">
                                <span class="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                {{ fn }}
                            </li>
                        </ul>
                        <div v-if="item.skills?.length" class="flex flex-wrap gap-2 mt-4">
                            <span
                                v-for="skill in item.skills"
                                :key="skill"
                                class="badge badge-soft badge-lg tooltip"
                                :data-tip="capitalize(skill)"
                            >
                                <i :class="'devicon-' + skill + '-plain text-lg text-gray-200'"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="hidden md:block w-1/2" :class="i % 2 === 0 ? 'pl-10' : 'pr-10 order-1'">
                    <div v-if="i % 2 !== 0" class="card">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                                {{ item.place.charAt(0) }}
                            </div>
                            <div>
                                <div class="font-semibold text-gray-200">{{ item.place }}</div>
                                <div class="text-xs text-gray-500">{{ item.time }}</div>
                            </div>
                        </div>
                        <h3 class="text-lg font-black text-gray-100 mb-3">{{ item.title }}</h3>
                        <ul class="space-y-2">
                            <li v-for="fn in item.functions" class="text-gray-400 text-sm leading-relaxed pl-4 relative">
                                <span class="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                {{ fn }}
                            </li>
                        </ul>
                        <div v-if="item.skills?.length" class="flex flex-wrap gap-2 mt-4">
                            <span
                                v-for="skill in item.skills"
                                :key="skill"
                                class="badge badge-soft badge-lg tooltip"
                                :data-tip="capitalize(skill)"
                            >
                                <i :class="'devicon-' + skill + '-plain text-lg text-gray-200'"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 z-10 flex items-center justify-center">
                    <div v-if="item.current" class="relative">
                        <div class="w-4 h-4 rounded-full bg-primary border-2 border-primary shadow-[0_0_10px_rgba(0,255,0,0.15)]"></div>
                    </div>
                    <div v-else class="w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-600"></div>
                </div>
            </div>

            <div
                v-if="item.current"
                class="absolute top-0 z-20 md:top-2"
                :class="[
                    'left-10',
                    i % 2 === 0 ? 'md:left-[calc(50%+1rem)]' : 'md:right-[calc(50%+1rem)]'
                ]"
            >
                <span class="badge badge-primary badge-sm">{{ props.currentLabel || 'Current' }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background: rgba(3, 7, 18, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(31, 41, 55, 1);
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.card:hover {
    border-color: rgba(52, 211, 153, 0.5);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1), 0 0 15px rgba(52, 211, 153, 0.08);
}
</style>
