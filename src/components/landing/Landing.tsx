"use client";

import { quotes } from "@/configs/quotes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LandingProps {
  backgroundImage: string;
  heading: string;
  description: string;
}

export default function Landing({
  backgroundImage,
  heading,
  description,
}: LandingProps) {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Select a random quote different from the current one
      setCurrentQuote((prev) => {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        while (randomQuote.quote === prev.quote && quotes.length > 1) {
          randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        }
        return randomQuote;
      });
    }, 7500); // 7.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("h-screen relative overflow-hidden")}>
      {/* Background Overlay */}
      <div className="w-full h-screen bg-black/30 absolute inset-0 z-10"></div>

      {/* Background Image */}
      <Image
        priority
        src={backgroundImage}
        alt="Landing background image"
        width={1080}
        height={1920}
        className="object-cover w-full h-screen"
      />

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between text-white absolute bottom-0 w-full z-20 p-6 md:p-10 items-start md:items-center">
        {/* Welcome Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-justify flex flex-col gap-4 w-full md:w-1/2"
        >
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold"
          >
            {heading}
          </motion.h3>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="leading-relaxed text-sm md:text-base"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Quote Section */}
          <motion.div
            key={currentQuote.quote}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-end text-right w-full mt-6 md:mt-0 md:w-1/3 space-y-2 min-h-20"
            aria-live="polite"
          >
            <motion.blockquote
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="italic text-sm md:text-lg leading-relaxed max-w-xs"
            >
              {`"${currentQuote.quote}"`}
            </motion.blockquote>
            <motion.span
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xs md:text-sm text-gray-300"
            >
              — {currentQuote.author}
            </motion.span>
          </motion.div>
      </div>
    </div>
  );
}