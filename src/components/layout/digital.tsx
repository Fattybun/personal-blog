"use client";

import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { philosophy } from "@/configs/philosophy";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { framework_logo } from "@/configs/framework";
import { highlight } from "@/configs/highlight";

const Degital = () => {
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
      <section className="grid grid-cols-3 grid-rows-4 gap-10 max-w-7xl place-items-center">
        <h1 className="font-bold text-3xl row-start-1 col-span-3">
          Professional Highlights
        </h1>

        {highlight.map((item, index) => (
          <motion.div
            key={index}
            style={{
              gridColumnStart: item.col,
              gridRowStart: item.row,
            }}
            initial={item.initial}
            animate={item.animation}
            transition={item.transition}
          >
            <Card className="min-h-28">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}

        <Image
          src="/autumn.png"
          alt="autumn"
          width={300}
          height={300}
          className="object-contain row-start-2 row-span-2 col-start-2"
        />
      </section>

      <section className="flex flex-col mb-10 items-center">
        <h1 className="font-bold text-3xl">Skills</h1>

        <div className="relative h-[400px] w-full flex items-center justify-center">
          <div className="relative w-64 h-64">
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
                    transform: `rotateY(${rotation}deg) translateZ(600px)`,
                  }}
                >
                  <div className="flex flex-col gap-5 items-center p-5 transition-all duration-500">
                    <Image
                      alt={item.image}
                      src={item.image}
                      width={150}
                      height={150}
                      className="object-cover drop-shadow-lg p-5"
                    />
                    <span className="font-bold text-2xl">{item.title}</span>
                  </div>

                  <div
                    className="w-full h-32 mt-1 rounded-xl overflow-hidden"
                    style={{
                      transform: "rotateX(180deg) scaleY(0.8)",
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 100%)",
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
                      opacity: 0.4,
                    }}
                  >
                    <div className="bg-white p-5 transform  blur-[1px]">
                      <Image
                        alt={item.image}
                        src={item.image}
                        width={125}
                        height={125}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-10 mb-10">
        <h1 className="font-bold text-3xl">Work Philosophy</h1>

        <div className="flex gap-5">
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
              className=" p-10 rounded-md shadow-md w-1/3 flex flex-col gap-5 "
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

export default Degital;
