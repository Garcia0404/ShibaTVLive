"use client";

import Image from "next/image";
import { useEffect, useState, memo } from "react";
import SvgCurve from "../ui/svgCurve";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Hero = memo(function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-center h-dvh px-4 pb-16 sm:pt-40 sm:pb-24">
      
      {/* Imagen HERO (LCP real) */}
      <Image
        src="/portada.webp"
        alt="Shiba TV Live"
        fill
        priority
        className="object-cover z-0 mask-b-from-1 opacity-40"
      />

      {/* Overlay */}
      

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            TV en vivo, películas, series ilimitadas y más.
          </h1>

          <p className="text-xl text-white mb-2">
            A partir de S/ 28.90. Cancela cuando quieras.
          </p>

          <p className="text-white/70 mb-8">
            ¿Quieres ver ya? Ingresa tu email para crear una cuenta.
          </p>

          <div className="flex justify-center gap-2">
            <Input placeholder="Email" className="py-7 max-w-xs" />
            <Button className="px-8 py-7 text-2xl bg-main">
              Comenzar
            </Button>
          </div>
        </div>
      </div>

      <SvgCurve />
    </section>
  );
});

export default Hero;
