"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/configs/philosophy";

const WorkPhilosophy = () => {
  return (
    <section className="flex flex-col items-center gap-8 mb-10 px-4 md:px-8">
      <h1 className="font-bold text-2xl sm:text-3xl text-center">Work Philosophy</h1>

      <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
        {philosophy.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.5, ease: "easeOut" }}
            className="p-6 rounded-md shadow-md w-full sm:w-[45%] md:w-[30%] flex flex-col gap-3"
          >
            <h6 className="font-bold text-lg">{item.title}</h6>
            <p className="italic text-gray-400 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default WorkPhilosophy;
