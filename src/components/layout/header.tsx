"use client";

import React, { useMemo } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { route } from "@/configs/route";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import useScrolled from "@/hooks/use-scrolled";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../theme/ThemeButton";
import CompactMusicPlayer from "../music/MusicButton";
import MenuToggle from "./MobileMenu";

const Header: React.FC = () => {
  const isScrolled = useScrolled(50);
  const url = usePathname();

  const isNestedRoute = (basePath: string) => {
    return url.startsWith(`/${basePath}/`) && url !== `/${basePath}`;
  };

  const blogHeaderBackground = isNestedRoute("blog");

  const routes = useMemo(
    () =>
      Object.entries(route).map(([key, label]) => ({
        label,
        url: key === "home" ? "/" : `/${label.toLowerCase()}`,
      })),
    []
  );

  return (
    <motion.header
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor:
          isScrolled || blogHeaderBackground
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0)",
        boxShadow:
          isScrolled || blogHeaderBackground
            ? "0 4px 6px rgba(0, 0, 0, 0.1)"
            : "0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        "w-full px-4 md:px-10 py-4 fixed top-0 z-50 flex items-center justify-between transition-all duration-300"
      )}
    >
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className={cn(
            "text-xl md:text-2xl font-bold",
            isScrolled || blogHeaderBackground ? "text-primary" : "text-white"
          )}
        >
          Bunventures
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-3">
          {routes.map((r) => (
            <Button
              variant="link"
              key={r.url}
              className={cn(
                "hover:text-primary",
                isScrolled || blogHeaderBackground
                  ? "text-primary"
                  : "text-white"
              )}
              asChild
            >
              <Link href={r.url}>{r.label}</Link>
            </Button>
          ))}
        </nav>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex relative min-w-60">
        <Input
          type="text"
          placeholder="Search"
          aria-label="Search"
          className={cn(
            "!placeholder-white text-white bg-white/40",
            (isScrolled || blogHeaderBackground) &&
              "!placeholder-black text-black bg-gray-100"
          )}
        />
        <span
          className={cn(
            "pe-3 absolute inset-y-0 right-0 flex items-center",
            isScrolled || blogHeaderBackground ? "text-black" : "text-white"
          )}
        >
          <Search size={20} />
        </span>
      </div>

      {/* Right Buttons */}
      <div className="hidden md:flex gap-3">
        <ModeToggle
          styling={cn(
            isScrolled || blogHeaderBackground
              ? "bg-gray-100 text-black"
              : "bg-white text-primary"
          )}
        />
        <CompactMusicPlayer
          styling={cn(
            isScrolled || blogHeaderBackground
              ? "bg-gray-100 text-black"
              : "bg-white text-primary"
          )}
        />
      </div>

      {/* Mobile Menu */}
      <MenuToggle />
    </motion.header>
  );
};

export default Header;