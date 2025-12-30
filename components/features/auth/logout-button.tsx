"use client";
import { signOut } from "next-auth/react";

export function LogoutButton() {
  const handleLogout = async () => {
    ``;
    try {
      await signOut({
        callbackUrl: "/signin",
        redirect: true,
      });
    } catch (err) {
      console.error("로그아웃 에러 : ", err);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="border border-(--border) py-1 rounded-(--default-rounded) text-xs hover:text-red-600 hover:border-red-600 cursor-pointer"
    >
      LOGOUT
    </button>
  );
}
