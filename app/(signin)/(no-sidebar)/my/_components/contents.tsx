"use client";
import ProfileAdditionalForm from "@/components/features/user/profile-additional-form";
import Card from "@/components/ui/card";
import { useAuthStore } from "@/store/auth-store";
import React from "react";

const Contents = () => {
  const { user } = useAuthStore();

  switch (user?.userType) {
    case "GUEST":
      return (
        <Card className="flex-2/3">
          <ProfileAdditionalForm />
        </Card>
      );
    default:
      return <div className="flex-2/3">Contents</div>;
  }
};

export default Contents;
