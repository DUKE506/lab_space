import ContentsLayout from "@/components/layout/contents-layout";
import SideBar from "@/components/ui/side-bar/side-bar";
import TopNav from "@/components/ui/top-nav/top-nav";
import React from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex">
      <SideBar />
      <div className="flex flex-col bg-background w-full px-8 overflow-y-auto">
        <TopNav />
        <ContentsLayout>{children}</ContentsLayout>
      </div>
    </div>
  );
}
