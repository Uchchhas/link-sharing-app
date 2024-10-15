<script setup>
    import {reactive} from 'vue'
    import AppLogo from '@/components/shared/AppLogo.vue'
    import IconEnvelop from '@/components/icons/IconEnvelop.vue'
    import IconLock from '@/components/icons/IconLock.vue'
    import {useAuthStore} from '../../../stores/auth.js'

    const authStore = useAuthStore()

    const formData = reactive({
        email: '',
        password: '',
    })

    const handleSubmit = async () => {
        try {
            // Call your API to authenticate
            const userData = ''
            authStore.login(userData)
            // Redirect to dashboard or home page
        } catch (error) {
            // Handle login error
        }
    }
</script>

<template>
    <div class="min-h-screen flex gap-8 flex-col items-center justify-center">
        <app-logo/>
        <div class="w-full max-w-[450px] p-10 rounded-lg border border-gray-100 shadow bg-white">
            <p class="mb-2 text-gray-900 font-semibold text-xl">Login</p>
            <p class="mb-10 text-gray-500 font-medium">Add your details below to get back into the app</p>

            <form @submit="handleSubmit">
                <div class="mb-5">
                    <label
                        for="email"
                        class="block mb-2 text-gray-600 font-medium text-sm"
                    >
                        Email address
                    </label>
                    <div class="relative">
                        <icon-envelop
                            class="w-4 absolute top-1/2 -translate-y-1/2 left-4 fill-gray-500"
                        />
                        <input
                            type="text"
                            id="email"
                            placeholder="e.g. johndoe@gmail.com"
                            class="w-full py-2 pl-10 pr-4 text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:border-violet-700 rounded-md"
                            required
                            v-model="formData.email"
                        />
                    </div>
                </div>
                <div class="mb-8">
                    <label
                        for="password"
                        class="block mb-2 text-gray-600 font-medium text-sm"
                    >
                        Password
                    </label>
                    <div class="relative">
                        <icon-lock
                            class="w-4 absolute top-1/2 -translate-y-1/2 left-4 fill-gray-500"
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            class="w-full py-2 pl-10 pr-4 text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:border-violet-700 rounded-md"
                            required
                            v-model="formData.password"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    class="w-full py-2 px-6 mb-4 text-white font-medium border border-violet-700 rounded-md bg-violet-700 hover:bg-violet-900 hover:shadow-xl transition"
                >
                    Login
                </button>
                <div class="flex gap-2 items-center justify-center text-sm">
                    <div class="text-gray-500">Don't have an account?</div>
                    <router-link to="/sign-up" class="text-violet-700 font-medium">
                        Create account
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>