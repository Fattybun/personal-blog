import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { route } from "@/configs/route";
import { MoonStar, Globe, Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const routes = [
    {
      label: route.home,
      url: "/",
    },
    {
      label: route.blog,
      url: "/blog",
    },
    {
      label: route.collaborate,
      url: "/collaborate",
    },
    {
      label: route.music,
      url: "/music",
    },
    {
      label: route.about,
      url: "/about",
    },
  ];

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
        "w-full",
        "px-10 py-4",
        "fixed top-0 z-50",
        "flex items-center justify-between"
      )}
    >
      <div className="flex gap-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          Bunventures
        </Link>

        <nav className="flex gap-3">
          {routes.map((route, index) => (
            <Button
              variant="link"
              className="text-slate-500 hover:text-primary"
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
          className="placeholder-white text-primary bg-white/40 "
        />

        <span
          className={cn(
            "pe-3",
            "absolute inset-y-0 right-0",
            "flex items-center text-primary"
          )}
        >
          <Search size={20} />
        </span>
      </div>

      <div className="flex gap-3">
        {actions.map((action, index) => (
          <span
            key={index}
            className={cn("p-2", "bg-white", "rounded-full", "cursor-pointer")}
          >
            {action.icon}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
