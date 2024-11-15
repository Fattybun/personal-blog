"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { route } from "@/configs/route";
import { MoonStar, Globe, Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import useScrolled from "@/hooks/use-scrolled";

const Header: React.FC = () => {
  const isScrolled = useScrolled(50);

  const routes = Object.entries(route).map(([key, label]) => ({
    label,
    url: key === "home" ? "/" : `/${label.toLowerCase()}`,
  }));

  const actions = [
    {
      icon: <MoonStar size={18} />,
    },
    {
      icon: <Globe size={18} />,
    },
  ];

  return (
    <header
      className={cn(
        "w-full px-10 py-4 fixed top-0 z-50 flex items-center justify-between transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="flex gap-3">
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold text-primary",
            isScrolled ? "text-primary" : "text-white"
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
                isScrolled ? "text-primary" : "text-white"
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
            isScrolled && "!placeholder-black text-black bg-gray-100"
          )}
        />
        <span
          className={cn(
            "pe-3 absolute inset-y-0 right-0 flex items-center",
            isScrolled ? "text-black" : "text-white"
          )}
        >
          <Search size={20} />
        </span>
      </div>

      <div className="flex gap-3">
        {actions.map((action, index) => (
          <span
            key={index}
            className={cn(
              "p-2 rounded-full cursor-pointer",
              isScrolled ? "bg-gray-100 text-black" : "bg-white text-primary"
            )}
          >
            {action.icon}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
