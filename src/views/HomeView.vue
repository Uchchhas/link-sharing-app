<script setup>
    import {computed, ref} from 'vue'
    import AppLinkForm from '@/components/shared/AppLinkForm.vue'
    import AppMobilePreview from '@/components/shared/AppMobilePreview.vue'

    const generateId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result = ''
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
    }

    const links = ref([
        { id: generateId(), platform: '', url: '' }
    ])

    const addNewLink = () => {
        links.value.push({ id: generateId(), platform: '', url: '' })
    }

    const removeLink = (index) => {
        if (links.value.length > 1) {
            links.value.splice(index, 1)
        }
    }

    const saveLinks = () => {
        console.log('Links saved:', links.value)
    }
</script>

<template>
    <main>
        <div class="container mx-auto">
            <div class="grid grid-cols-[500px_auto] gap-4 items-start">
                <div class="sticky top-5 flex justify-center py-10 px-4 rounded-lg bg-white">
                    <app-mobile-preview :links="links" />
                </div>
                <div class="p-8 rounded-lg bg-white">
                    <p class="mb-2 text-gray-700 text-2xl font-semibold">
                        Customize your links
                    </p>
                    <p class="mb-8 text-gray-500">
                        Add/Edit/Remove links below and then share all your profiles with the world!
                    </p>
                    <app-link-form
                        v-model:links="links"
                        @add-new-link="addNewLink"
                        @remove-link="removeLink"
                        @save="saveLinks"
                    />
                </div>
            </div>
        </div>
    </main>
</template>