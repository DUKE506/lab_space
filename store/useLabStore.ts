import { apiManager } from "@/lib/api/api";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Lab } from "../types/lab/lab";
import { toast } from "sonner";

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
            toast.success("신청되었습니다.");
            set({ isLoading: false });
          } catch (error) {
            console.log(error);
            toast.error("신청 중 문제가 발생하였습니다.");
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
