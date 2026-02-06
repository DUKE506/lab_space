"use client";
import { useUserStore } from "@/store/user-store";
import { PlusIcon, PowerIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useEffect } from "react";

const LABICON = ["🧬", "🤖", "🛻", "💾", "💿", "📷", "🪙"];

const AppBar = () => {
  const { getUserLabs, userLabs, isLoading } = useUserStore();
  useEffect(() => {
    getUserLabs();
  }, []);

  return (
    <div className="flex flex-col items-center gap-12 bg-[#18181b] px-2 py-4">
      <LabItem icon="🏠" link="/home" />
      {/* 연구실 */}
      <div className="flex-1 flex flex-col gap-4">
        {userLabs.map((v, i) => (
          <LabItem
            key={i}
            icon={LABICON[Math.floor(Math.random() * LABICON.length)]}
            link={`/lab/${v.id}`}
          />
        ))}

        {/* 추가버튼 */}
        <LabItem
          icon={
            <div className="w-full h-full flex justify-center items-center border-2 border-dashed border-(--text-light) rounded-sm">
              <PlusIcon className="text-(--text-light)" />
            </div>
          }
          link="/lab/add"
        />
      </div>
      {/* 설정 */}
      <div>
        <LabItem icon={<UserIcon className="text-white" />} link="/my" />
        <LabItem icon={<PowerIcon className="text-red-500" />} link="/" />
      </div>
    </div>
  );
};

export default AppBar;

const LabItem = ({
  icon,
  link,
}: {
  icon: string | React.ReactNode;
  link: string;
}) => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <Link href={link}>
      <div
        className={`w-12 h-12 flex justify-center items-center aspect-square  gap-2 text-xl ${pathname === link ? "bg-[#5a5a60]" : ""}  rounded-sm cursor-pointer hover:bg-[#5a5a60]`}
      >
        {icon}
      </div>
    </Link>
  );
};
