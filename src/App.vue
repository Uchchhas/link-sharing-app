<script setup>
    import {RouterView, useRoute} from 'vue-router'
    import AppHeader from '@/components/layouts/AppHeader.vue'
    import {onMounted} from "vue";

    const route = useRoute()

    onMounted(() => {
        console.log(route)

    })
</script>

<template>
    <router-view v-if="route.name === 'sign-in' || route.name === 'sign-up'"/>
    <div v-else class="p-4 bg-gray-50">
        <app-header/>
        <router-view/>
    </div>
</template>
