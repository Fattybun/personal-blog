"use client";

import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { philosophy } from "@/configs/philosophy";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { framework_logo } from "@/configs/framework";
import { highlight } from "@/configs/highlight";
import { useIsMobile } from "@/hooks/use-mobile";

const Digital = () => {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % framework_logo.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [framework_logo.length]);

  return (
    <>
      {/* Professional Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4 md:gap-10 max-w-7xl place-items-center py-5">
        <h1 className="font-bold text-2xl md:text-3xl row-start-1 col-span-full text-center">
          Professional Highlights
        </h1>

        {highlight.map((item, index) => (
          <motion.div
            key={index}
            style={
              !isMobile && {
                gridColumnStart: item.col,
                gridRowStart: item.row,
              }
            }
            initial={item.initial}
            animate={item.animation}
            transition={item.transition}
            className="w-full"
          >
            <Card className="min-h-28">
              <CardHeader>
                <CardTitle className="text-sm md:text-base">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-xs md:text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}

        <Image
          src="/autumn.png"
          alt="autumn"
          width={200}
          height={200}
          className="object-contain row-start-2 row-span-2 col-start-2 hidden md:block"
        />
      </section>

      {/* Skills */}
      <section className="flex flex-col mb-10 items-center px-4 md:px-8">
        <h1 className="font-bold text-2xl sm:text-3xl mb-6">Skills</h1>

        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden md:overflow-visible flex items-center justify-center">
          <div className="relative h-48 w-64 md:h-64">
            {framework_logo.map((item, index) => {
              const rotation =
                (index - currentIndex) * (360 / framework_logo.length) - 10;

              return (
                <div
                  key={index}
                  className={cn(
                    "absolute top-0 left-0 w-full transition-all duration-500"
                  )}
                  style={{
                    transform: `rotateY(${rotation}deg) translateZ(500px)`,
                  }}
                >
                  <div className="flex flex-col gap-3 items-center p-3 md:p-5 transition-all duration-500">
                    <Image
                      alt={item.image}
                      src={item.image}
                      width={100}
                      height={100}
                      className="object-cover drop-shadow-lg p-2 md:p-5"
                    />
                    <span className="font-bold text-lg md:text-2xl">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Philosophy */}
      <section className="flex flex-col items-center gap-8 mb-10 px-4 md:px-8">
        <h1 className="font-bold text-2xl sm:text-3xl text-center">
          Work Philosophy
        </h1>

        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
          {philosophy.map((item, index) => (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.5,
                ease: "easeOut",
              }}
              key={index}
              className="p-6 rounded-md shadow-md w-full sm:w-[45%] md:w-[30%] flex flex-col gap-3"
            >
              <h6 className="font-bold text-lg">{item.title}</h6>
              <p className="italic text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Digital;
