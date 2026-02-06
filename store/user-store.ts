import { apiManager } from "@/lib/api/api";
import { AdditionalUserDto, User } from "@/types/user";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { useAuthStore } from "./auth-store";
import { UserLabsDto } from "@/types/user/user-labs";

interface UserState {
  user: User | null;
  getUser: () => Promise<void>;
  userLabs: UserLabsDto[];
  isLoading: boolean;
  getUserLabs: () => Promise<void>;
  additionalUserProfile: (
    additionalUserDto: AdditionalUserDto,
  ) => Promise<User | undefined>;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist<UserState>(
      (set) => ({
        user: null,
        getUser: async () => {
          try {
            const response: User = await apiManager.get("users/me").json();
            set({ user: response });
          } catch (err) {
            console.log(err);
          }
        },
        userLabs: [],
        getUserLabs: async () => {
          set({ isLoading: true });
          try {
            const res: UserLabsDto[] = await apiManager
              .get("users/findLabs")
              .json();
            set({ isLoading: false, userLabs: res });
          } catch (err) {
            console.error(err);
            set({ isLoading: false });
          }
        },
        isLoading: false,
        additionalUserProfile: async (user) => {
          try {
            console.log(user);
            const response: User = await apiManager
              .post("users/register", {
                json: user,
              })
              .json();

            // const { setUser } = useAuthStore.getState();

            // setUser(response);
            return response;
          } catch (err) {
            console.log(err);
          }
        },
      }),
      { name: "user-store" },
    ),
  ),
);
