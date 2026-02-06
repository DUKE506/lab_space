import React from "react";

export default function ContentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-auto py-8 flex flex-col gap-12 px-12 ">{children}</div>
  );
}
