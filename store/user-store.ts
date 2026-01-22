import { apiManager } from "@/lib/api/api";
import { AdditionalUserDto, User } from "@/types/user";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { useAuthStore } from "./auth-store";

interface UserState {
  additionalUserProfile: (
    additionalUserDto: AdditionalUserDto,
  ) => Promise<User | undefined>;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist<UserState>(
      (set) => ({
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
