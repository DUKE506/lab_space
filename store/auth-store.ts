import { apiManager } from "@/lib/api/api";
import { LoginDto, User } from "@/types/user";
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';




interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    signIn: (data: LoginDto) => Promise<void>;
    signOut: () => Promise<void>;

}


export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set, get) => ({
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: null,
                signIn: async (data: LoginDto) => {
                    set({ isLoading: true })
                    try {
                        const response = await apiManager.post('/auth/login', {
                            json: data
                        })

                    } catch (error) {
                        set({ isLoading: false })
                    }
                },
                signOut: async () => {

                }
            }), { name: 'auth-store' }
        )
    )
)