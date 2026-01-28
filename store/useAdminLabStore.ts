import { apiManager } from "@/lib/api/api";
import { Lab } from "@/types/lab/lab";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AdminLabState {
  isLoading: boolean;
  labs: Lab[];
  getLabs: () => Promise<void>;
  approveLab: (labId: string) => Promise<void>;
  rejectLab: (labId: string) => Promise<void>;
}

export const useAdminLabStore = create<AdminLabState>()(
  devtools(
    persist<AdminLabState>(
      (set) => ({
        isLoading: false,
        labs: [],
        getLabs: async () => {
          try {
            set({ isLoading: true });
            const res: Lab[] = await apiManager
              .get("labs/admin/findAll")
              .json();
            console.log(res);
            set({ labs: res });
            set({ isLoading: false });
          } catch (error) {
            console.log(error);
            set({ isLoading: false });
          }
        },
        approveLab: async (labId: string) => {
          try {
            set({ isLoading: true });
            await apiManager.patch(`labs/admin/approve/${labId}`);
            set({ isLoading: false });
          } catch (error) {
            console.log(error);
            set({ isLoading: false });
          }
        },
        rejectLab: async (labId: string) => {
          try {
            set({ isLoading: true });
            await apiManager.patch(`labs/admin/reject/${labId}`);
            set({ isLoading: false });
          } catch (error) {
            console.log(error);
            set({ isLoading: false });
          }
        },
      }),
      {
        name: "admin-lab",
      },
    ),
  ),
);
