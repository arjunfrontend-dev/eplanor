"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Detect mobile devices for performance tuning
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Parallax transforms (less intensity on mobile)
  const yImage = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "8%" : "20%"]
  );
  const yGradient1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "5%" : "15%"]
  );
  const yGradient2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "3%" : "10%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: yImage }}>
        <Image
          src="/assets/images/hero-bg.jpeg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-blue-950/50 z-[1]"
     
      />


      {/* Parallax Gradient Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40"
        style={{ y: yGradient1 }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: isMobile ? 8 : 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-cyan-500/20 mix-blend-overlay"
        style={{ y: yGradient2 }}
        animate={{
          x: isMobile ? ["0%", "5%", "0%"] : ["-10%", "10%", "-10%"],
        }}
        transition={{
          duration: isMobile ? 12 : 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Innovate. Scale.{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Succeed.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your business with cutting-edge technology solutions that
          drive growth and innovation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="gradient-bg text-white rounded-2xl px-8 py-3 text-lg shadow-lg hover:opacity-90">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
         
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
