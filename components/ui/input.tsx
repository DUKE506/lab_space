import { cn } from "@/lib/utills/style";
import { Icon } from "@iconify/react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "bg-(--surface) p-2 border border-(--border) text-sm rounded-sm focus:outline-(--primary)",
        className,
      )}
      {...props}
    />
  );
};

export const PasswordInput = ({ ...props }: InputProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="relative">
      <Input
        className="w-full pr-10"
        {...props}
        type={`${show ? "text" : "password"}`}
      />
      <div
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {!show ? (
          <EyeClosedIcon
            className="text-(--text-secondary)"
            strokeWidth={1.5}
            size={20}
          />
        ) : (
          <EyeIcon strokeWidth={1.5} size={20} />
        )}
      </div>
    </div>
  );
};

export const SearchInput = ({ ...props }: InputProps) => {
  return (
    <div className="relative">
      <Input className="pl-10 pr-2 " {...props} />
      <Icon
        icon="material-symbols:search"
        width={24}
        height={24}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-(--text-secondary)"
      />
    </div>
  );
};
