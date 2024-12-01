"use client";

import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { media } from "@/configs/route";
import { usePathname } from "next/navigation"; // Import useRouter

const Footer: React.FC = () => {
  const pathname = usePathname(); // Use the router to get current path

  const social_media = [
    { url: media.instagram, icon: <Instagram className="w-5 h-5" /> },
    { url: media.github, icon: <Github className="w-5 h-5" /> },
    { url: media.linkedin, icon: <Linkedin className="w-5 h-5" /> },
  ];

  if (pathname === "/") {
    return null; // Don't render the footer on the homepage
  }

  return (
    <footer className="w-full py-4 lg:px-10 bg-primary text-[#F1F6FC]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="text-center lg:text-left text-sm">
          © {new Date().getFullYear()} Bunventures Blog. All rights reserved.
        </div>

        <div className="flex gap-4">
          {social_media.map((media, index) => (
            <Link key={index} href={media.url} target="_blank">
              {media.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
