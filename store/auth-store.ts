import { apiManager } from "@/lib/api/api";
import { ErrorRespons } from "@/types/http/errorResponse";
import { LoginResponse } from "@/types/http/loginResponse";
import { LoginDto, User } from "@/types/user";
import { HTTPError } from "ky";
import { toast } from "sonner";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  signIn: (data: LoginDto) => Promise<boolean>;
  signUp: (data: SignUpRequestDto) => Promise<boolean>;
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
            const response: LoginResponse = await apiManager
              .post("auth/login", {
                json: data,
              })
              .json();

            /**
             * 로그인 성공 후
             * 1. 토큰저장
             * 2. user정보저장
             * 3. 리다이렉트
             */
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("refreshToken", response.refrehsToken);
            localStorage.setItem("user", JSON.stringify(response.user));

            set({ user: response.user });
            return true;
          } catch (error) {
            console.log(error);
            if (error instanceof HTTPError) {
              const errData: ErrorRespons = await error.response.json();
              toast.error(errData.message);
            }
            set({ isLoading: false });
            return false;
          }
        },
        signUp: async (data) => {
          set({ isLoading: true });
          try {
            const res = await apiManager
              .post("auth/signup", {
                json: data,
              })
              .json();
            toast.error("회원가입 성공");
            set({ isLoading: false });
            return true;
          } catch (err: any) {
            set({ isLoading: false });
            console.error(err);
            if (err instanceof HTTPError) {
              const errData: ErrorRespons = await err.response.json();
              toast.error(errData.message);
            }

            return false;
          }
        },
        signOut: async () => {},
        setUser: (user) => set({ user }),
      }),
      { name: "auth-store" },
    ),
  ),
);
