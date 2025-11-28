"use client";

import { useEffect, useState } from "react";
import SvgCurve from "../ui/svgCurve";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex items-center max-h-240 pb-16 sm:pt-40 sm:pb-24 px-4 relative h-dvh">
      <div className="bg-linear-to-t from-black/90 to-transparent z-10 absolute inset-0 max-h-270 max-w-480 mx-auto"></div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/portada.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 max-w-480 max-h-270 mx-auto"
      ></div>

      <div className="max-w-4xl mx-auto text-center z-10 max-h-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            TV en vivo, películas, series ilimitadas y más.
          </h1>

          <p className="text-lg text-white sm:text-xl font-semibold mb-2 max-w-2xl mx-auto leading-relaxed">
            A partir de S/ 28.90. Cancela cuando quieras.
          </p>
          <p className="text-lg text-white/70 sm:text-md mb-8 max-w-2xl mx-auto leading-relaxed">
            ¿Quieres ver ya? Ingresa tu email para crear una cuenta o reiniciar
            tu membresía.
          </p>

          <div className="flex w-full items-center justify-center gap-2">
            <Input
              type="email"
              placeholder="Email"
              className="text-white rounded-sm border-white/40 bg-white/10 placeholder-white py-7 max-w-130"
            />
            <Button
              type="submit"
              variant="default"
              className="px-8 py-7 hover:bg-red-500 bg-main text-white text-2xl rounded-sm"
            >
              Comenzar
            </Button>
          </div>
        </div>
      </div>
      <SvgCurve />
    </section>
  );
}
