import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { media } from "@/configs/route";

const Footer: React.FC = () => {
  const social_media = [
    { url: media.instagram, icon: <Instagram className="w-5 h-5" /> },
    { url: media.github, icon: <Github className="w-5 h-5" /> },
    { url: media.linkedin, icon: <Linkedin className="w-5 h-5" /> },
  ];

  return (
    <footer className="w-full py-4 px-5 lg:px-40 bg-[#2D3C4D] text-[#F1F6FC]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left text-sm">
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
