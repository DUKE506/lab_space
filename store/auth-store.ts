import { apiManager } from "@/lib/api/api";
import { LoginDto, User } from "@/types/user";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  signIn: (data: LoginDto) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User) => void;
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
          set({ isLoading: true });
          try {
            console.log("zustand");
            console.log(data);
            const response = await apiManager
              .post("auth/login", {
                json: data,
              })
              .json();
            console.log(response);
          } catch (error) {
            console.log(error);
            set({ isLoading: false });
          }
        },
        signOut: async () => {},
        setUser: (user) => set({ user }),
      }),
      { name: "auth-store" },
    ),
  ),
);
