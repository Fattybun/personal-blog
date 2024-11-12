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
      // Select a random quote
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
    }, 7500); // 7.5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("h-screen relative overflow-hidden")}>
      {/* Background Overlay */}
      <div className="w-full h-screen bg-black/30 absolute inset-0 z-10"></div>

      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        width={1080}
        height={1920}
        className="object-cover w-full h-screen"
      />

      {/* Content Section */}
      <div className="flex justify-between text-white absolute bottom-0 w-full z-20 p-10 items-start">
        {/* Welcome Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-justify flex flex-col gap-4 w-1/2"
        >
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-2xl font-bold"
          >
            {heading}
          </motion.h3>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          key={currentQuote.quote} // Ensures animations run on each quote change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Adjust duration for fade effect
          className="flex flex-col items-end text-right w-1/3 space-y-2"
        >
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }} // Adjust delay for effect
            className="italic text-lg leading-relaxed max-w-xs"
          >
            {`"${currentQuote.quote}"`}
          </motion.span>
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }} // Adjust delay for effect
            className="text-sm text-gray-300"
          >
            — {currentQuote.author}
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
