<script setup>
    import {RouterView} from 'vue-router'
    import AppHeader from '@/components/layouts/AppHeader.vue'
</script>

<template>
    <div class="p-4 bg-gray-50">
        <app-header/>
        <router-view/>
    </div>
</template>
