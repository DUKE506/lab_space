import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      로그인실패
      <Link href="/">
        <button>돌아가기</button>
      </Link>
    </div>
  );
};

export default Page;
