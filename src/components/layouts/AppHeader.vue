<script setup>
    import {RouterLink} from 'vue-router'
    import AppLogo from '@/components/shared/AppLogo.vue'
    import IconLink from '@/components/icons/IconLink.vue'
    import IconCircleUser from '@/components/icons/IconCircleUser.vue'
</script>

<template>
    <header class="mb-4">
        <div class="container mx-auto">
            <div class="flex items-center justify-between p-4 rounded-lg bg-white">
                <app-logo/>
                <nav class="flex items-center gap-3">
                    <router-link
                        to="/"
                        class="inline-flex items-center gap-2 py-2 px-4 text-gray-600 hover:text-violet-700 font-medium text-sm rounded-md bg-white hover:bg-violet-100 transition group"
                        active-class="!text-violet-700 bg-violet-100 [&>svg]:fill-violet-700"
                    >
                        <icon-link class="w-4 fill-gray-600 group-hover:fill-violet-700"/>
                        Links
                    </router-link>
                    <router-link
                        to="/profile"
                        class="inline-flex items-center gap-2 py-2 px-4 text-gray-600 hover:text-violet-700 font-medium text-sm rounded-md bg-white hover:bg-violet-100 transition group"
                        active-class="!text-violet-700 bg-violet-100 [&>svg]:fill-violet-700"
                    >
                        <icon-circle-user class="w-4 fill-gray-600 group-hover:fill-violet-700"/>
                        Profile Details
                    </router-link>
                </nav>
                <router-link
                    to="/preview"
                    class="py-2 px-4 text-violet-700 hover:text-white font-medium text-sm border border-violet-700 rounded-md bg-white hover:bg-violet-700 transition"
                >
                    Preview
                </router-link>
            </div>
        </div>
    </header>
</template>