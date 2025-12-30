import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="p-2  border border-(--border) rounded-(--default-rounded) focus:outline-(--primary)"
      {...props}
    />
  );
};
