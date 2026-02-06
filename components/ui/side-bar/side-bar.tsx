"use client";
import React from "react";
import SideBarTab from "./side-bar-tab";
import { useAuthStore } from "@/store/auth-store";
import { menuItems } from "@/lib/config/menu-items";

const SideBar = () => {
  const { user } = useAuthStore();

  const filterMenuItems = menuItems.filter((item) => {
    if (!item.canAccess) return true;
    return item.canAccess(user);
  });

  return (
    <div className="flex flex-col w-[280px] h-full border-r-2 border-(--border) bg-(--surface) shrink-0">
      <Logo />
      <div className="flex flex-col py-5 px-3 gap-1">
        {filterMenuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.groupName && index !== 0 && (
              <div className="h-px bg-(--border) my-4 mx-3" />
            )}
            <SideBarTab
              icon={item.icon}
              title={item.title}
              url={item.url}
              groupName={item.groupName}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

const LogoIcon = () => {
  return (
    <div className="flex items-center justify-center text-white w-9 h-9 rounded-[4px] bg-linear-to-l from-(--primary) to-(--accent)">
      L
    </div>
  );
};
const Logo = () => {
  return (
    <div className="flex items-center gap-4 px-6 py-6 border-b border-(--border)">
      <LogoIcon />
      <span className="text-2xl font-bold">LAB SPACE</span>
    </div>
  );
};
