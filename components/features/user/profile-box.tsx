"use client";
import { useSession } from "next-auth/react";
import { User } from "lucide-react";
import React, { useEffect } from "react";
import { LogoutButton } from "../auth/logout-button";

export function ProfileBox() {
  const { data: session } = useSession();
  useEffect(() => {
    console.log("세션", session);
  }, [session]);

  return (
    <div className="w-fit flex flex-col gap-2 border border-(--border) p-4 rounded-(--default-rounded)">
      <div className="flex items-center gap-2 ">
        <div className="w-12 h-12 flex items-center justify-center aspect-square rounded-full border border-(--border)">
          <User strokeWidth={1} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">{session?.user.name}</span>
          <span className="text-xs">{session?.user.email}</span>
        </div>
      </div>
      <LogoutButton />
    </div>
  );
}
