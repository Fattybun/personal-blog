"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import useScrolled from "@/hooks/use-scrolled";
import { route } from "@/configs/route";
import { ModeToggle } from "./theme-button";
import Link from "next/link";
import CompactMusicPlayer from "./music-button";
import { usePathname } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MenuToggle = () => {
  const url = usePathname();
  const isScrolled = useScrolled(50);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isNestedRoute = (basePath: string) => {
    return url.startsWith(`/${basePath}/`) && url !== `/${basePath}`;
  };

  const blogHeaderBackground = isNestedRoute("blog");

  const routes = Object.entries(route).map(([key, label]) => ({
    label,
    url: key === "home" ? "/" : `/${label.toLowerCase()}`,
  }));

  return (
    <>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="md:hidden p-2"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <Menu
              size={24}
              className={cn(isScrolled ? "text-primary" : "text-white")}
            />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-4 w-full">
          {/* Visually hidden title for accessibility */}
          <DrawerTitle>
            <VisuallyHidden>Navigation Menu</VisuallyHidden>
          </DrawerTitle>

          <nav className="flex flex-col gap-4">
            {routes.map((route, index) => (
              <Button
                variant="ghost"
                key={index}
                asChild
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <Link href={route.url}>{route.label}</Link>
              </Button>
            ))}
          </nav>
          <div className="mt-4 flex gap-3 justify-center">
            <ModeToggle
              styling={cn(
                isScrolled || blogHeaderBackground
                  ? "bg-gray-100 text-black"
                  : "bg-white text-primary"
              )}
            />
          </div>
        </DrawerContent>
      </Drawer>

      {/* Keep music player outside the drawer to prevent unmounting */}
      <div className="fixed bottom-4 right-6 z-50">
        <CompactMusicPlayer styling="py-2 shadow-md" />
      </div>
    </>
  );
};

export default MenuToggle;
