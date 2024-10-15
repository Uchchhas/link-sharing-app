import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),
    actions: {
        login(userData) {
            // Perform login logic here (e.g., API call)
            // On successful login:
            this.user = userData
            this.isAuthenticated = true
            Cookies.set('auth_token', userData.token, { expires: 7 }) // Set cookie to expire in 7 days
        },
        logout() {
            this.user = null
            this.isAuthenticated = false
            Cookies.remove('auth_token')
        },
        checkAuth() {
            const token = Cookies.get('auth_token')
            if (token) {
                // Verify token with your backend API
                // If valid, set the user and isAuthenticated state
                // For this example, we'll assume it's valid
                this.isAuthenticated = true
                // You might want to fetch user data here
            } else {
                this.isAuthenticated = false
            }
        },
    },
})