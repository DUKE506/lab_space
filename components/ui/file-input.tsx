"use client";

import { cn } from "@/lib/utils";
import { AlertCircle, File, Upload, X } from "lucide-react";
import { useRef, useState } from "react";

// ============================================
// 1. FileInput (기본 제어 컴포넌트)
// ============================================

interface FileInputProps {
  value?: File[];
  onChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // MB
  disabled?: boolean;
  className?: string;
  name?: string;
}

export const FileInput = ({
  value = [],
  onChange,
  accept,
  multiple = false,
  maxSize = 10,
  disabled = false,
  className,
  name,
}: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");

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
        setError(`파일 크기는 ${maxSize}MB를 초과할 수 없습니다.`);
        return null;
      }

      validFiles.push(file);
    }

    setError("");
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

  return (
    <div className={cn("space-y-2", className)}>
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        disabled={disabled}
        className="hidden"
      />

      {/* Upload Button */}
      {(multiple || value.length === 0) && (
        <button
          type="button"
          onClick={handleClick}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-8 border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          <Upload className="w-8 h-8" />
          <span className="text-sm font-medium">
            파일을 선택하거나 드래그하세요
          </span>
          <span className="text-xs text-gray-500">최대 {maxSize}MB</span>
        </button>
      )}

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {/* File List */}
      {value.length > 0 && (
        <div className="space-y-2">
          {value.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 p-3 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <File className="w-5 h-5 text-gray-400" />
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
                  className="p-1 hover:bg-red-50 text-red-600 rounded transition-colors"
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
};
