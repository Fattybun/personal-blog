"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { route } from "@/configs/route";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import useScrolled from "@/hooks/use-scrolled";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-button";
import CompactMusicPlayer from "./music-button";

const Header: React.FC = () => {
  const isScrolled = useScrolled(50);

  const url = usePathname();

  const isNestedRoute = (basePath: string) => {
    return url.startsWith(`/${basePath}/`) && url !== `/${basePath}`;
  };

  const blogHeaderBackground = isNestedRoute("blog");

  const routes = Object.entries(route).map(([key, label]) => ({
    label,
    url: key === "home" ? "/" : `/${label.toLowerCase()}`,
  }));

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
        "w-full px-10 py-4 fixed top-0 z-50 flex items-center justify-between transition-all duration-300"
      )}
    >
      <div className="flex gap-3">
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold",
            isScrolled || blogHeaderBackground ? "text-primary" : "text-white"
          )}
        >
          Bunventures
        </Link>

        <nav className="flex gap-3">
          {routes.map((route, index) => (
            <Button
              variant="link"
              className={cn(
                "hover:text-primary",
                isScrolled || blogHeaderBackground
                  ? "text-primary"
                  : "text-white"
              )}
              key={index}
              asChild
            >
              <Link href={route.url}>{route.label}</Link>
            </Button>
          ))}
        </nav>
      </div>

      <div className="relative min-w-60">
        <Input
          type="text"
          placeholder="Search"
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

      <div className="flex gap-3">
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
        {/* <span
          className={cn(
            "p-2 rounded-full cursor-pointer",
            isScrolled || blogHeaderBackground
              ? "bg-gray-100 text-black"
              : "bg-white text-primary"
          )}
        >
          <Globe size={18} />
        </span> */}
      </div>
    </motion.header>
  );
};

export default Header;
