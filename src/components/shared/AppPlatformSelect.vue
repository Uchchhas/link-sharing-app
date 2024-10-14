<script setup>
    import {ref, onMounted, onBeforeUnmount} from 'vue'
    import IconYouTube from '@/components/icons/IconYouTube.vue'
    import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
    import IconGithub from '@/components/icons/IconGithub.vue'

    const props = defineProps({
        modelValue: String
    })

    const emit = defineEmits(['update:modelValue'])

    const isOpen = ref(false)
    const triggerRef = ref(null)
    const dropdownRef = ref(null)

    const platforms = ['YouTube', 'LinkedIn', 'Github']

    const platformIcons = {
        YouTube: IconYouTube,
        LinkedIn: IconLinkedIn,
        Github: IconGithub
    }

    const toggleDropdown = () => {
        isOpen.value = !isOpen.value
    }

    const selectPlatform = (platform) => {
        emit('update:modelValue', platform)
        isOpen.value = false
    }

    const handleClickOutside = (event) => {
        if (isOpen.value &&
            triggerRef.value &&
            !triggerRef.value.contains(event.target) &&
            dropdownRef.value &&
            !dropdownRef.value.contains(event.target)) {
            isOpen.value = false
        }
    }

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onBeforeUnmount(() => {
        document.removeEventListener('click', handleClickOutside)
    })
</script>

<template>
    <div class="relative">
        <button
            type="button"
            class="w-full py-2 px-4 border border-gray-300 focus:border-violet-700 focus:ring-1 ring-violet-700 rounded-md bg-white"
            @click="toggleDropdown"
            ref="triggerRef"
        >
            <span
                :class="[
                    `flex items-center`,
                    modelValue ? 'text-gray-700' : 'text-gray-500'
                ]"
            >
                <component
                    v-if="modelValue"
                    :is="platformIcons[modelValue]"
                    class="w-4 h-4 mr-2 fill-gray-700"
                />
                {{ modelValue || 'Select platform' }}
            </span>
        </button>
        <div
            v-if="isOpen"
            class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
            ref="dropdownRef"
        >
            <button
                v-for="platform in platforms"
                :key="platform"
                type="button"
                class="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center"
                @click="selectPlatform(platform)"
            >
                <component :is="platformIcons[platform]" class="w-5 h-5 mr-2"/>
                {{ platform }}
            </button>
        </div>
    </div>
</template>