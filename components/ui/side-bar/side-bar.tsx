"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col w-[280px] h-full border-r border-(--border)">
      <Logo />
      <div className="flex flex-col py-5 px-3">
        <Tab
          icon="streamline-ultimate-color:space-astronaut"
          title="홈"
          url="/home"
          groupName="메인"
        />
        <div className="w-full h-0.25 bg-(--border) my-4" />
        <Tab
          icon="fluent-color:chart-multiple-16"
          title="대시보드"
          url="/dashboard"
          groupName="연구실"
        />
        <Tab icon="flat-color-icons:folder" title="프로젝트" url="/projects" />
        <Tab icon="vaadin:newspaper" title="논문" url="/papers" />
        <Tab icon="fluent-color:people-16" title="멤버" url="/members" />
        <Tab icon="fluent-color:settings-16" title="설정" url="/settings " />
      </div>
    </div>
  );
};

export default SideBar;

const LogoIcon = () => {
  return (
    <div className="outline-none flex items-center justify-center text-white w-9 h-9 rounded-[4px] bg-linear-to-l from-(--primary) to-(--accent)">
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

const Tab = ({
  icon,
  title,
  url,
  groupName,
}: {
  icon: string;
  title: string;
  url: string;
  groupName?: string;
}) => {
  const pathName = usePathname();
  console.log(pathName);
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
