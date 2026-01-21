import { useAuthStore } from "@/store/auth-store";
import { UserType } from "@/types/user";
import { ImageIcon, UserIcon } from "lucide-react";
import React from "react";

export const ProfileInfo = () => {
  const { user } = useAuthStore();
  return (
    <div className="flex items-center gap-4">
      <div className="w-24 aspect-square rounded-sm flex items-center justify-center bg-linear-to-l from-(--secondary) to-(--primary) border border-(--border)">
        <ImageIcon className="text-white" size={36} strokeWidth={1} />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-4xl font-bold text-(--text-primary) ">
          {user?.nickname}
        </span>
        <div className="flex items-center gap-2 text-gray-700">
          <UserTypeBadge type={user?.userType || "GUEST"} />
          <span className="text-lg">{user?.email}</span>
        </div>
      </div>
    </div>
  );
};

const UserTypeBadge = ({ type }: { type: UserType }) => {
  switch (type) {
    case "GUEST":
      return (
        <div className="flex justify-center items-center gap-2  bg-gray-200  px-8 py-1">
          <UserIcon strokeWidth={1.5} size={20} />
          <span>{type}</span>
        </div>
      );
    case "STUDENT":
      return (
        <div className="w-fit border border-(--success) bg-(--success-bg) font-semibold rounded-(--rounded-sm) px-4 h-full flex items-center text-(--success) text-xs">
          <span>연구원</span>
        </div>
      );
    case "PROFESSOR":
      return (
        <div className="w-fit border border-(--primary) bg-(--primary-bg) font-semibold rounded-(--rounded-sm) px-4 h-full flex items-center text-(--primary) text-xs">
          <span>교수</span>
        </div>
      );
  }
};
