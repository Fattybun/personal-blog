import { cn } from "@/lib/utils";

const About = () => {
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
      About Me
    </div>
  );
};

export default About;
