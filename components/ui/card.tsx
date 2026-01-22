import { cn } from "@/lib/utils";
import React from "react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-(--surface) border-1 border-(--border) rounded-(--rounded-md) p-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
