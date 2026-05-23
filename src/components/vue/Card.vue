<script setup lang="ts">

const { project } = defineProps<{ project: Project }>();

</script>
<template>
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img :src="project.imageUrl" :alt="project.title"/>
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <template v-if="project.link">
                <div class="card-actions justify-end">
                    <a :href="project.link" target="_blank" class="btn btn-primary">View Project</a>
                </div>
            </template>
        </div>
    </div>
</template>
