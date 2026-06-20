<script setup lang="ts">
import Skill from "./Skill.vue";

const { project, btnText } = defineProps<{ project: Project; btnText?: string }>();

</script>
<template>
    <div class="card bg-base-100 shadow-sm">
        <figure class="h-48 overflow-hidden">
            <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover"
            />
        </figure>
        <div class="card-body">
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="mb-5">{{ project.description }}</p>
            <div v-if="project.skills?.length" class="flex flex-wrap gap-2 mb-4">
                <Skill
                    v-for="skill in project.skills"
                    :key="skill"
                    :skill="skill"
                />
            </div>
            <template v-if="project.repoUrl">
                <div class="card-actions justify-end">
                    <a :href="project.repoUrl" target="_blank" class="btn btn-primary">
                        <i class="devicon-github-plain"></i>
                        {{ btnText || "View Project" }}
                    </a>
                </div>
            </template>
        </div>
    </div>
</template>
