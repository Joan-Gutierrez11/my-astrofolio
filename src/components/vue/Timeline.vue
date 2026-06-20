<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ExperienceCard from "@components/vue/ExperienceCard.vue";

const props = defineProps<{
    experience: WorkExperience[];
    currentLabel?: string;
}>();

const itemRefs = ref<(HTMLElement | null)[]>([]);
const visibleItems = ref<Set<number>>(new Set());

let observer: IntersectionObserver | null = null;

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            let changed = false;
            for (const entry of entries) {
                const index = Number(entry.target.getAttribute('data-index'));
                if (entry.isIntersecting && !visibleItems.value.has(index)) {
                    visibleItems.value.add(index);
                    changed = true;
                    observer?.unobserve(entry.target);
                }
            }
            if (changed) visibleItems.value = new Set(visibleItems.value);
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    for (const el of itemRefs.value) {
        if (el) observer.observe(el);
    }
});

onBeforeUnmount(() => {
    observer?.disconnect();
});
</script>

<template>
    <ul class="timeline timeline-snap-icon timeline-vertical -ml-48">
        <li
            v-for="(exp, index) in experience"
            :key="index"
            :ref="(el: any) => { if (el) itemRefs[index] = el as HTMLElement }"
            :data-index="index"
            class="pb-3 transition-all duration-700 ease-out"
            :class="visibleItems.has(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: visibleItems.has(index) ? `${index * 120}ms` : '0ms' }"
        >
            <template v-if="index > 0">
                <hr />
            </template>
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <div class="timeline-end">
                <time class="font-mono italic">{{ exp.time }}</time>
                <ExperienceCard :experience="exp" />
            </div>
            <template v-if="index < experience.length - 1">
                <hr />
            </template>
        </li>
    </ul>
</template>
