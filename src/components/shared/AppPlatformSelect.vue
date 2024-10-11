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

    const platforms = ['YouTube', 'LinkedIn', 'Facebook']

    const platformIcons = {
        YouTube: IconYouTube,
        LinkedIn: IconLinkedIn,
        Facebook: IconGithub
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
            class="w-full p-2 text-left border border-gray-300 rounded-md focus:border-violet-700 bg-white"
            @click="toggleDropdown"
            ref="triggerRef"
        >
            <div class="flex items-center">
                <component :is="platformIcons[modelValue]" class="w-5 h-5 mr-2" v-if="modelValue"/>
                {{ modelValue || 'Select platform' }}
            </div>
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