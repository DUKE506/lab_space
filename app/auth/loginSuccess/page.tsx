"use client";
import ky from "ky";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");
  const userId = searchParams.get("userId");

  useEffect(() => {
    const exchangeCode = async () => {
      if (!code) {
        router.push("/signin");
        return;
      }

      try {
        // const response = await ky.
      } catch (err) {
        console.log(err);
        router.push("/signin");
      }
    };
  }, [code]);

  return <div>로그인 성공</div>;
};

export default Page;
