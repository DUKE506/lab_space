import React from "react";
import SideBarTab from "./side-bar-tab";

interface MenuItem {
  title: string;
  icon: string;
  url: string;
  groupName?: string;
}

const menuItems: MenuItem[] = [
  {
    title: "홈",
    icon: "streamline-ultimate-color:space-astronaut",
    url: "/home",
    groupName: "메인",
  },
  // {
  //   title: "대시보드",
  //   icon: "fluent-color:chart-multiple-16",
  //   url: "/dashboard",
  //   groupName: "연구실",
  // },
  {
    title: "프로젝트",
    icon: "flat-color-icons:folder",
    url: "/projects",
    groupName: "연구실",
  },
  // {
  //   title: "논문",
  //   icon: "vaadin:newspaper",
  //   url: "/papers",
  // },
  {
    title: "멤버",
    icon: "fluent-color:people-16",
    url: "/members",
  },
  {
    title: "설정",
    icon: "fluent-color:settings-16",
    url: "/settings",
  },
];

const SideBar = () => {
  return (
    <div className="flex flex-col w-[280px] h-full border-r-2 border-(--border) bg-(--surface)">
      <Logo />
      <div className="flex flex-col py-5 px-3 gap-1">
        {menuItems.map((item, index) => (
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
