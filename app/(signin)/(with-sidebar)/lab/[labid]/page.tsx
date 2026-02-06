"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { labid } = useParams();

  useEffect(() => {
    console.log(labid);
  }, [labid]);

  return <div>Page</div>;
};

export default Page;
