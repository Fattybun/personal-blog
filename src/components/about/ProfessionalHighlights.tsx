"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { highlight } from "@/configs/highlight";
import { useIsMobile } from "@/hooks/use-mobile";

const ProfessionalHighlights = () => {
  const isMobile = useIsMobile();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 max-w-7xl place-items-center py-5">
      <h1 className="font-bold text-2xl md:text-3xl row-start-1 col-span-full text-center">
        Professional Highlights
      </h1>

      {highlight.map((item, index) => (
        <motion.div
          key={index}
          style={
            !isMobile
              ? { gridColumnStart: item.col, gridRowStart: item.row }
              : undefined
          }
          initial={item.initial}
          animate={item.animation}
          transition={item.transition}
          className="w-full"
        >
          <Card className="min-h-28">
            <CardHeader>
              <CardTitle className="text-sm md:text-base">{item.title}</CardTitle>
              <CardDescription className="text-xs md:text-sm">{item.description}</CardDescription>
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
  );
};

export default ProfessionalHighlights;
