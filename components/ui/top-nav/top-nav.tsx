"use client";

import LogoIcon from "../logo-icon";
import { useAuthStore } from "@/store/auth-store";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const TopNav = () => {
  const { user, isLoading } = useAuthStore();
  return (
    <div className="flex items-center justify-between bg-(--surface) border-2 border-(--border) rounded-(--rounded-md) p-3  my-6">
      <div className="h-full">
        {user?.userType !== "GUEST" || user?.labId ? (
          <UserLabInfo />
        ) : (
          <div className="border border-(--warning) bg-(--warning-bg) font-semibold rounded-(--rounded-sm) px-4 h-full flex items-center text-(--warning) text-xs">
            <span>연구실에 가입해보세요!</span>
          </div>
        )}
      </div>

      <div>
        {/* <LogoIcon str={user?.nickname[0] || ""} size={9} /> */}
        <Profile />
      </div>
    </div>
  );
};

export default TopNav;

const UserLabInfo = () => {
  return (
    <div className="flex items-center gap-4 bg-(--hover) px-3 py-2 rounded-(--rounded-md) w-fit">
      <LogoIcon str="IM" size={7} textSize="sm" />
      <div className="flex flex-col">
        <span className="text-(--text-primary) text-sm">IMPL 연구실</span>
        <span className="text-(--text-secondary) text-xs">연구원</span>
      </div>
    </div>
  );
};

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuthStore();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <div className="flex items-center gap-2 hover:bg-(--hover) px-3 py-2 rounded-sm cursor-pointer">
          <LogoIcon str={user?.nickname[0] || ""} size={9} />
          <ChevronDown
            className={`${open ? "rotate-180" : ""} duration-100`}
            size={20}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-60 rounded-sm px-0" collisionPadding={30}>
        <ProfileTab
          icon="material-symbols:person-rounded"
          title="내정보"
          url="/my"
        />
        <ProfileTab
          icon="material-symbols:logout-rounded"
          title="로그아웃"
          url="/"
        />
      </PopoverContent>
    </Popover>
  );
};

const ProfileTab = ({
  icon,
  title,
  url,
}: {
  icon: string;
  title: string;
  url: string;
}) => {
  return (
    <Link href={url}>
      <div className="flex items-center gap-2  px-4 py-2 cursor-pointer hover:bg-(--hover-light) rounded-(--rounded-sm)">
        <Icon icon={icon} width={20} className="text-(--text-secondary)" />
        <span className="text-(--text-primary) text-xs">{title} </span>
      </div>
    </Link>
  );
};
