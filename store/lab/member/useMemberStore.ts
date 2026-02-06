import { apiManager } from "@/lib/api/api";
import { LabMemberDto } from "@/types/lab/member/lab-member";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface MemberState {
  members: LabMemberDto[];
  getMembers: (labId: string) => Promise<void>;
  isLoading: boolean;
}

export const useMemberStore = create<MemberState>()(
  devtools(
    persist<MemberState>(
      (set) => ({
        isLoading: false,
        members: [],
        getMembers: async (labId) => {
          set({ isLoading: true });
          try {
            //연구실 id
            const res: LabMemberDto[] = await apiManager
              .get(`labs/members/${labId}`)
              .json();
            console.log(res);
            set({ isLoading: false });
          } catch (err) {
            console.error(err);
            set({ isLoading: false });
          }
        },
      }),
      { name: "lab-member-store" },
    ),
  ),
);
