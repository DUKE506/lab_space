import { apiManager } from "@/lib/api/api";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface LabState {
  createLab: (formData: FormData) => Promise<void>;
}

export const useLabStore = create<LabState>()(
  devtools(
    persist<LabState>(
      (set) => ({
        createLab: async (formData: FormData) => {
          try {
            const res = await apiManager.post("labs/create", {
              body: formData,
            });
          } catch (error) {
            console.log(error);
          }
        },
      }),
      {
        name: "lab",
      },
    ),
  ),
);
