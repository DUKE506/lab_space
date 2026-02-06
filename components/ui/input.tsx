import { cn } from "@/lib/utills/style";
import { Icon } from "@iconify/react";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "p-2 border border-(--border) text-sm rounded-sm focus:outline-(--primary)",
        className,
      )}
      {...props}
    />
  );
};

export const SearchInput = ({ ...props }: InputProps) => {
  return (
    <div className="relative">
      <Input className="pl-10 pr-2 py-2 bg-(--surface)" {...props} />
      <Icon
        icon="material-symbols:search"
        width={24}
        height={24}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-(--text-secondary)"
      />
    </div>
  );
};
