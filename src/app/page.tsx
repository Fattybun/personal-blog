import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={cn(
        "flex",
        "mt-20",
        "gap-10",
        "relative",
        "items-center justify-center",
        "bg-slate-100",
        "h-[calc(100vh_-_132px)] min-h-[590px] min-w-[1536px]"
      )}
    >
      <div
        className={cn(
          "bg-slate-200/95",
          "absolute left-0 top-0",
          "w-1/2 h-full min-h-[590px]"
        )}
      ></div>

      <div
        className={cn(
          "z-10",
          "gap-4 ps-5 lg:ps-40",
          "h-full w-1/2",
          "flex flex-col",
          "justify-center"
        )}
      >
        <h1 className="text-4xl font-bold text-primary">Frontend Developer</h1>
        <h3 className="text-xl font-bold text-secondary">
          Crafting Engaging and User-Centric Experiences
        </h3>

        <span>
          Hello! I’m a frontend developer passionate about building intuitive,
          responsive interfaces that make a lasting impact. With a focus on
          clean code and effective design, I bring ideas to life in the digital
          space.
        </span>

        <span>
          On my site, you’ll find my complete resume, skill set, and
          professional journey, along with insights into the projects that have
          shaped my expertise. I’m always eager to grow and explore new
          challenges, using my skills to create meaningful digital experiences.
        </span>

        <span className="font-bold text-secondary">Want to Know More?</span>

        <Button className="w-fit">
          <Link href="/about">About Me</Link>
        </Button>
      </div>

      <Image
        src="/landing.png"
        width="1920"
        height="1080"
        alt=""
        className={cn("px-20", "w-1/2 h-3/4", "object-contain")}
      />
    </div>
  );
}
