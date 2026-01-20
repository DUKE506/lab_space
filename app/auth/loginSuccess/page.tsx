"use client";
import { apiManager } from "@/lib/api/api";
import { useAuthStore } from "@/store/auth-store";
import { User } from "@/types/user";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useEffect } from "react";

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");
  const { setUser } = useAuthStore();

  useEffect(() => {
    const exchangeCode = async () => {
      if (!code) {
        router.push("/signin");
        return;
      }

      try {
        const response = await apiManager.post(`auth/token`, {
          json: {
            code,
          },
        });

        if (response.ok) {
          const data: TokenResponse = await response.json();

          //토큰 저장
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("user", JSON.stringify(data.user));

          setUser(data.user);

          router.push("/home");
        } else {
          throw new Error("로그인 실패");
        }
      } catch (err) {
        console.log(err);
        // router.push("/signin");
      }
    };

    exchangeCode();
  }, [searchParams, router]);

  return <div>로그인 성공</div>;
};

export default Page;
