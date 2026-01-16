import React from "react";
import LogoIcon from "../logo-icon";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between bg-(--surface) border-2 border-(--border) rounded-(--rounded-md) p-3  my-6">
      <UserLabInfo />
      <div>
        <LogoIcon str="이" size={9} />
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
  return <div></div>;
};
