<script setup lang="ts">
    import IconLinkHorizontal from '@/components/icons/IconLinkHorizontal.vue'
</script>

<template>
    <router-link
        :to="{name: 'home'}"
        class="inline-flex items-center gap-1"
    >
        <div class="w-8 h-8 grid place-items-center rounded-md bg-violet-700">
            <icon-link-horizontal class="w-5 fill-white"/>
        </div>
        <span class="text-2xl font-bold tracking-wide">devlinks</span>
    </router-link>
</template>
