
import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
export const userAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: true,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    checkAuth: async () => {
        try {
            const response = axiosInstance.get("auth/check");
            set({ authUser: (await response).data })
        } catch (error) {
            set({ authUser: null })
            console.error("Error checking auth:", error);
        }
        finally {
            set({ isCheckingAuth: false })
        }
    }
}))