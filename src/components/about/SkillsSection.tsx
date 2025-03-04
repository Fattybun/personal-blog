"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { framework_logo } from "@/configs/framework";

const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % framework_logo.length);
    }, 3000); // 每 3 秒切换一次
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col items-center px-4 md:px-8">
      <h1 className="font-bold text-2xl sm:text-3xl mb-6">Skills</h1>

      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden md:overflow-visible flex items-center justify-center">
        <div className="relative h-48 w-64 md:h-64">
          {framework_logo.map((item, index) => {
            // 计算每个图标相对于当前索引的旋转角度
            const rotation = (index - currentIndex) * (360 / framework_logo.length) - 10;

            return (
              <div
                key={index}
                className={cn("absolute top-0 left-0 w-full transition-all duration-500")}
                style={{ transform: `rotateY(${rotation}deg) translateZ(500px)` }}
              >
                <div className="flex flex-col gap-3 items-center p-3 md:p-5 transition-all duration-500">
                  <Image
                    alt={item.image}
                    src={item.image}
                    width={100}
                    height={100}
                    className="object-cover drop-shadow-lg p-2 md:p-5"
                  />
                  <span className="font-bold text-lg md:text-2xl">{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



export default SkillsSection;
