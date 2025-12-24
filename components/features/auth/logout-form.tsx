"use client";
import { signOut } from "next-auth/react";

export function LogoutButton() {
  const handleLogout = async () => {
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
    <button onClick={handleLogout} className="bg-red-300 text-white">
      로그아웃
    </button>
  );
}
