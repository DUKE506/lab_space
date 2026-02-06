"use client";
import { useAuthStore } from "@/store/auth-store";
import React from "react";
import { ProfileInfo } from "./_components/profile-info";
import { AuthStatusBadge } from "./_components/auth-status-badge";
import ProfileDetail from "./_components/profile-detail";
import Contents from "./_components/contents";

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <ProfileInfo />
      <AuthStatusBadge />
      <div className="flex gap-8">
        <ProfileDetail />
        <Contents />
      </div>
    </div>
  );
};

export default Page;
