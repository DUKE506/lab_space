"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarTabProps {
  icon: string;
  title: string;
  url: string;
  groupName?: string;
}

const SideBarTab = ({ icon, title, url, groupName }: SideBarTabProps) => {
  const pathName = usePathname();
  const isActive = pathName.includes(url);

  return (
    <Link href={url}>
      <div className={`flex flex-col gap-2 `}>
        {groupName && (
          <span className="text-sm text-(--text-light) ml-3">{groupName}</span>
        )}
        <div
          className={`relative flex items-center gap-4  p-3 rounded-[4px] hover:bg-(--hover) cursor-pointer ${isActive && "bg-(--hover)"}`}
        >
          <Icon icon={icon} width={28} height={28} />
          <span
            className={`text-sm  ${isActive ? "text-(--primary) font-bold" : "text-(--text-secondary) "}`}
          >
            {title}
          </span>
          {isActive && (
            <div className="bg-(--primary) w-0.5 h-6 absolute top-1/2 left-0 -translate-y-1/2 " />
          )}
        </div>
      </div>
    </Link>
  );
};

export default SideBarTab;
