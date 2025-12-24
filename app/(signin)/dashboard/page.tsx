import { auth } from "@/auth";
import { LogoutButton } from "@/components/features/auth/logout-form";
import React from "react";

export default async function Page() {
  const session = await auth();

  console.log("세션 ", session);
  return (
    <div>
      대시보드화면
      <LogoutButton />
    </div>
  );
}
