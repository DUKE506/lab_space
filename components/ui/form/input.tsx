import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../input";
import React from "react";
import { FormErrorMessage } from "@/components/features/user/profile-additional-form";

interface FormInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name"
> {
  label: string;
  required?: boolean;
  error?: FieldError | string;
  register?: UseFormRegisterReturn; // React Hook Form register
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, required = false, error, register, ...props }, ref) => {
    // error가 FieldError 객체인지 문자열인지 확인
    const errorMessage = typeof error === "string" ? error : error?.message;

    return (
      <label className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <span className="text-sm text-(--text-secondary)">{label}</span>
          {required && <span className="text-(--error)">*</span>}
        </div>

        <Input
          ref={ref}
          {...register}
          {...props}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
        />

        {errorMessage && <FormErrorMessage message={errorMessage} />}
      </label>
    );
  },
);
