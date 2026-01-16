"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export function DarkModeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onChangeMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`absolute right-10 bottom-10 border-2 border-(--border) p-2 rounded-(--default-rounded) cursor-pointer ${theme === "dark" ? "hover:bg-white" : "hover:bg-black"} group`}
      onClick={onChangeMode}
    >
      {theme === "dark" ? (
        <SunIcon className="group-hover:text-black" />
      ) : (
        <MoonIcon className="group-hover:text-white" />
      )}
    </div>
  );
}
