import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { route } from "@/configs/route";
import { MoonStar, Sun } from "lucide-react";

const Header: React.FC = () => {
  const theme = true ? (
    <MoonStar className="cursor-pointer text-gray-600" />
  ) : (
    <Sun />
  );
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

  return (
    <header className="w-full py-5 pt-6 px-40 bg-white fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Bunventures</div>

        <div className="flex gap-3 items-center">
          <nav className="flex gap-3">
            {routes.map((route, index) => (
              <Button
                variant="link"
                className="text-[#4A5B6B] hover:text-primary"
                key={index}
                asChild
              >
                <Link href={route.url}>{route.label}</Link>
              </Button>
            ))}
          </nav>

          {theme}
        </div>
      </div>
    </header>
  );
};

export default Header;
