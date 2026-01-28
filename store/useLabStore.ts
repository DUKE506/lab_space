import { apiManager } from "@/lib/api/api";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Lab } from "../types/lab/lab";

interface LabState {
  isLoading: boolean;
  labs: Lab[];
  getLabs: () => Promise<void>;
  createLab: (formData: FormData) => Promise<void>;
}

export const useLabStore = create<LabState>()(
  devtools(
    persist<LabState>(
      (set) => ({
        isLoading: false,
        labs: [],
        getLabs: async () => {
          try {
            set({ isLoading: true });
            const res: Lab[] = await apiManager.get("labs/findAll").json();
            console.log(res);

            set({ isLoading: false, labs: res });
          } catch (error) {
            console.log(error);
            set({ isLoading: false });
          }
        },
        createLab: async (formData: FormData) => {
          try {
            set({ isLoading: true });
            const res = await apiManager.post("labs/create", {
              body: formData,
            });
            console.log(res);
            set({ isLoading: false });
          } catch (error) {
            console.log(error);
            set({ isLoading: false });
          }
        },
      }),
      {
        name: "lab",
      },
    ),
  ),
);
