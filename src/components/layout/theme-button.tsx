"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type themeProps = {
  styling: string;
};

export function ModeToggle({ styling }: themeProps) {
  const { setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = React.useState<boolean>(false);

  const switchTheme = () => {
    const mode = themeIcon ? "dark" : "light";
    setThemeIcon((prev) => !prev);
    setTheme(mode);
  };

  return (
    <span
      className={cn("p-2 rounded-full cursor-pointer", styling)}
      onClick={switchTheme}
    >
      {themeIcon ? <Moon size={18} /> : <Sun size={18} />}
    </span>
  );
}
