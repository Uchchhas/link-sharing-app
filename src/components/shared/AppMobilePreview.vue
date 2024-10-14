<script setup>
    import IconArrowRight from "@/components/icons/IconArrowRight.vue";

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
        <div class="absolute inset-0 my-8 mx-4 rounded-xl">
            <div class="flex flex-col items-center justify-center mb-8 animate-pulse">
                <div class="size-20 mb-4 rounded-full bg-gray-100"></div>
                <div class="w-9/12 h-5 mb-2 rounded-3xl bg-gray-100"></div>
                <div class="w-1/2 h-3 rounded-3xl bg-gray-100"></div>
            </div>

            <ul class="flex flex-col gap-4">
                <li v-for="(link, index) in links" :key="index">
                    <transition
                        name="fade"
                        enter-active-class="transition ease-out duration-300"
                        leave-active-class="transition ease-in duration-300"
                        enter-from-class="opacity-0 transform -translate-y-2"
                        enter-to-class="opacity-100 transform translate-y-0"
                        leave-from-class="opacity-100 transform translate-y-0"
                        leave-to-class="opacity-0 transform -translate-y-2"
                    >
                        <a
                            v-show="link?.platform"
                            :href="link?.url"
                            target="_blank"
                            :class="[
                                'w-full flex items-center justify-between py-3 px-4 text-white bg-gray-100 rounded-md',
                                {'bg-[#ff0000]': link?.platform === 'YouTube'},
                                {'bg-[#0a66c2]': link?.platform === 'LinkedIn'},
                                {'bg-[#333]': link?.platform === 'Github'}
                            ]"
                        >
                            {{ link.platform }}
                            <icon-arrow-right
                                class="w-4 h-4 fill-white"
                            />
                        </a>
                    </transition>
                </li>
            </ul>
        </div>
    </div>
</template>