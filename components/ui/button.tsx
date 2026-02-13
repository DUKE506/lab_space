import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Icon, LucideIcon } from "lucide-react";
import React from "react";

const ButtonVariant = cva(
  //기본 코드
  "text-sm flex items-center justify-center gap-2 rounded-sm py-2  cursor-pointer whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-(--primary) text-white hover:bg-(--primary-dark)",
        reject: "bg-(--error) text-white hover:bg-red-600",
      },
      size: {
        default: "w-full ",
        sm: "w-fit px-4",
      },
    },
    //기본값 설정
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof ButtonVariant> {
  className?: string;
  icon?: React.ReactNode;
  label?: string;
}

const Button = ({
  className,
  size,
  variant,
  label = "버튼",
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(ButtonVariant({ size, variant }), className)}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
