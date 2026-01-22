"use client";
import { cn } from "@/lib/utils";
import { AlertCircle, File, Upload, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { FieldError } from "react-hook-form";

// ============================================
// FormFileInput - Form 통합 컴포넌트
// ============================================

interface FormFileInputProps {
  label: string;
  required?: boolean;
  error?: FieldError | string;
  value?: File[];
  onChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // MB
  disabled?: boolean;
  className?: string;
  name?: string;
  hint?: string;
}

export const FormFileInput = React.forwardRef<
  HTMLInputElement,
  FormFileInputProps
>(
  (
    {
      label,
      required = false,
      error,
      value = [],
      onChange,
      accept,
      multiple = false,
      maxSize = 10,
      disabled = false,
      className,
      name,
      hint,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [validationError, setValidationError] = useState<string>("");

    // error가 FieldError 객체인지 문자열인지 확인
    const errorMessage = typeof error === "string" ? error : error?.message;
    const displayError = errorMessage || validationError;

    const handleClick = () => {
      if (disabled) return;
      inputRef.current?.click();
    };

    const validateFiles = (files: FileList): File[] | null => {
      const validFiles: File[] = [];
      const maxSizeBytes = maxSize * 1024 * 1024;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.size > maxSizeBytes) {
          setValidationError(`파일 크기는 ${maxSize}MB를 초과할 수 없습니다.`);
          return null;
        }

        validFiles.push(file);
      }

      setValidationError("");
      return validFiles;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      const validFiles = validateFiles(files);
      if (!validFiles) return;

      let newFiles: File[];
      if (multiple) {
        newFiles = [...value, ...validFiles];
      } else {
        newFiles = [validFiles[0]];
      }

      onChange?.(newFiles);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    };

    const removeFile = (index: number) => {
      if (disabled) return;
      const newFiles = value.filter((_, i) => i !== index);
      onChange?.(newFiles);
    };

    const inputId =
      name || `file-input-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {/* Label */}
        <label htmlFor={inputId} className="flex items-center gap-1">
          <span className="text-sm font-medium text-(--text-secondary)">
            {label}
          </span>
          {required && (
            <span className="text-(--error)" aria-label="required">
              *
            </span>
          )}
        </label>

        {/* Hidden Input */}
        <input
          id={inputId}
          ref={inputRef}
          type="file"
          name={name}
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          disabled={disabled}
          className="hidden"
          aria-invalid={!!displayError}
          aria-describedby={
            displayError
              ? `${inputId}-error`
              : hint
                ? `${inputId}-hint`
                : undefined
          }
        />

        {/* Upload Button */}
        {(multiple || value.length === 0) && (
          <button
            type="button"
            onClick={handleClick}
            disabled={disabled}
            className={cn(
              "w-full px-4 py-8 border-2 border-dashed border-(--border) hover:border-gray-400 transition-colors flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900",
              disabled && "opacity-50 cursor-not-allowed",
              displayError && "border-(--error) bg-red-50",
            )}
          >
            <Upload className="w-8 h-8" />
            <span className="text-sm font-medium">
              파일을 선택하거나 드래그하세요
            </span>
            <span className="text-xs text-gray-500">최대 {maxSize}MB</span>
          </button>
        )}

        {/* Hint Text */}
        {hint && !displayError && (
          <p id={`${inputId}-hint`} className="text-xs text-(--text-secondary)">
            {hint}
          </p>
        )}

        {/* Error Message */}
        {displayError && (
          <p
            id={`${inputId}-error`}
            className="text-xs text-(--error) flex items-center gap-1"
            role="alert"
          >
            <AlertCircle className="w-4 h-4" />
            {displayError}
          </p>
        )}

        {/* File List */}
        {value.length > 0 && (
          <div className="space-y-2">
            {value.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center gap-3 p-3 border border-(--border) hover:border-gray-300 transition-colors"
              >
                <File className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                {!disabled && (
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-1 hover:bg-red-50 text-red-600 rounded transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);
