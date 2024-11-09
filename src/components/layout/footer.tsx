// components/layout/footer.tsx
import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { media } from "@/configs/route";

const Footer: React.FC = () => {
  const social_media = [
    {
      url: media.instagram,
      icon: (
        <Instagram className="w-5 h-5 text-[#2D3C4D] hover:text-[#F1F6FC]" />
      ),
    },
    {
      url: media.github,
      icon: <Github className="w-5 h-5 text-[#2D3C4D] hover:text-[#F1F6FC]" />,
    },
    {
      url: media.linkedin,
      icon: (
        <Linkedin className="w-5 h-5 text-[#2D3C4D] hover:text-[#F1F6FC]" />
      ),
    },
  ];

  return (
    <footer className="w-full text-[#2D3C4D] py-4 px-40">
      <div className="flex items-center justify-between">
        <div className="text-sm text-[#F1F6FC] mt-4 md:mt-0">
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
