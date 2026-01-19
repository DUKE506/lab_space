"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      // JWT를 localStorage나 쿠키에 저장
      localStorage.setItem("accessToken", token);
      router.push("/dashboard");
    }
  }, [searchParams, router]);

  return <div>로그인 처리 중...</div>;
}
