<script setup>
    import IconPlus from '@/components/icons/IconPlus.vue'
    import IconLink from '@/components/icons/IconLink.vue'
    import IconEqual from '@/components/icons/IconEqual.vue'
    import AppPlatformSelect from '@/components/shared/AppPlatformSelect.vue'

    const props = defineProps({
        links: {
            type: Array,
            default: () => []
        }
    })

    const emit = defineEmits(['add-new-link', 'remove-link', 'save'])
</script>

<template>
    <button
        type="button"
        class="mb-8 w-full flex items-center justify-center gap-2 py-3 px-4 text-violet-700 hover:text-white font-medium border border-violet-700 rounded-md bg-white hover:bg-violet-700 transition group"
        @click="emit('add-new-link')"
    >
        <icon-plus class="w-4 fill-violet-700 group-hover:fill-white transition"/>
        Add New Link
    </button>
    <div class="w-full md:w-1/2">
        <form @submit.prevent="emit('save')">
            <div
                class="mb-6"
                v-for="(link, index) in links"
                :key="index"
            >
                <div class="p-4 rounded-lg bg-gray-50">
                    <div class="mb-4 flex gap-4 items-center justify-between">
                        <div class="inline-flex gap-2 items-center text-gray-600 font-semibold">
                            <icon-equal class="w-4 fill-gray-600"/>
                            Link #{{ index + 1 }}
                        </div>
                        <button
                            type="button"
                            v-if="index > 0"
                            @click="emit('remove-link', index)"
                            class="text-gray-500 hover:text-red-600 transition"
                        >
                            Remove
                        </button>
                    </div>
                    <div class="mb-3">
                        <label
                            :for="`platform-${index}`"
                            class="block mb-1 text-gray-600 font-medium text-sm">
                            Platform
                        </label>
                        <app-platform-select
                            :id="`platform-${index}`"
                            v-model="link.platform"
                        />
                    </div>
                    <div>
                        <label
                            :for="`link-${index}`"
                            class="block mb-1 text-gray-600 font-medium text-sm">
                            Link
                        </label>
                        <div class="relative">
                            <icon-link
                                class="w-4 absolute top-1/2 -translate-y-1/2 left-4 fill-gray-500"
                            />
                            <input
                                type="url"
                                :id="`link-${index}`"
                                placeholder="Enter link"
                                class="w-full py-2 pl-10 pr-4 border border-gray-300 focus:border-violet-700 rounded-md"
                                required
                                v-model="link.url"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mb-6 border-gray-300">
            <div class="text-right">
                <button
                    type="submit"
                    class="py-2 px-6 text-white font-medium text-sm border border-violet-700 rounded-md bg-violet-700 hover:bg-violet-900 hover:shadow-xl transition"
                >
                    Save
                </button>
            </div>
        </form>
    </div>
</template>