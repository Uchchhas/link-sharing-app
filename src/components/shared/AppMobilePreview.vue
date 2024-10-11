<script setup>
    const props = defineProps({
        links: {
            type: Array,
            default: () => []
        }
    })
</script>

<template>
    <div class="relative w-64 h-[550px] rounded-[2.5rem] border-2 border-gray-300 shadow-lg bg-white">
        <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white w-20 h-4 rounded-b-xl border-t-4 border-gray-300"
        />
        <div class="absolute inset-0 my-8 mx-4 bg-gray-100 rounded-xl">
            <ul>
                <li
                    v-for="(link, index) in links"
                    :key="index"
                    class="mb-2"
                >
                    <span class="font-semibold">
                        {{ link.platform }}:
                    </span>
                    {{ link.url }}
                </li>
            </ul>
        </div>
    </div>
</template>