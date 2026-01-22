"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function ScrollableLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div
      ref={scrollRef}
      className="flex flex-col bg-background w-full px-8 overflow-y-auto"
    >
      {children}
    </div>
  );
}
