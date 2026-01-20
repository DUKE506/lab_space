"use client";

import LogoIcon from "../logo-icon";
import { useAuthStore } from "@/store/auth-store";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

const TopNav = () => {
  const { user, isLoading } = useAuthStore();
  return (
    <div className="flex items-center justify-between bg-(--surface) border-2 border-(--border) rounded-(--rounded-md) p-3  my-6">
      <div>{user?.userType !== "GUEST" && user?.labId && <UserLabInfo />}</div>

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
  const { user } = useAuthStore();
  return (
    <Popover>
      <PopoverTrigger>
        <LogoIcon str={user?.nickname[0] || ""} size={9} />
      </PopoverTrigger>
      <PopoverContent>
        <div>설정</div>
      </PopoverContent>
    </Popover>
  );
};
