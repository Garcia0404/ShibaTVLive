"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "@/components/icons";

export const Extras = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % extras.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + extras.length) % extras.length);

  // Autoplay (3s) with pause on hover/focus

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % extras.length),
      4000
    );
    return () => window.clearInterval(id);
  }, [isPaused]);

  const extras = [
    {
      id: "crunchyroll",
      logo: "/extras/crunchyroll.svg",
      title: "Crunchyroll",
      description:
        "Watch on your TV, phone, tablet, or laptop. Your content follows you everywhere.",
      dialogDetails:
        "Crunchyroll ofrece el mejor catálogo de anime con subtítulos y doblajes en múltiples idiomas. Incluye simulcasts y contenido exclusivo, además de perfiles y recomendaciones personalizadas.",
    },
    {
      id: "paramount",
      logo: "/extras/paramount.webp",
      title: "Paramount+",
      description:
        "Download your favorite content to watch offline whenever you want.",
      dialogDetails:
        "Paramount+ provide acceso a películas, series y deportivos en directo. Planes con y sin anuncios, compatibilidad con múltiples dispositivos y descargas para ver sin conexión.",
    },
    {
      id: "hbomax",
      logo: "/extras/hbomax.webp",
      title: "HBO Max",
      description:
        "Download your favorite content to watch offline whenever you want.",
      dialogDetails:
        "HBO Max incluye estrenos, originales y una amplia biblioteca de clásicos. Disfruta de contenido premium, calidad HDR y sonido envolvente en dispositivos compatibles.",
    },
    {
      id: "pornhub",
      logo: "/extras/pornhub.webp",
      title: "PornHub Premium",
      description:
        "Experience smooth, uninterrupted streaming with our advanced technology.",
      dialogDetails:
        "PornHub Premium ofrece acceso a contenido exclusivo, reproducción sin anuncios y streaming optimizado para velocidades bajas. Requiere verificación de edad.",
    },
    {
      id: "vix",
      logo: "/extras/vix.webp",
      title: "Vix",
      description:
        "Create separate profiles for each family members with personalized recommendations.",
      dialogDetails:
        "Vix se centra en contenido en español y latinoamericano, con películas, series y novelas gratuitas y de pago. Ideal para público hispanohablante.",
    },
    {
      id: "viki",
      logo: "/extras/viki.webp",
      title: "Viki",
      description:
        "Download your favorite content to watch offline whenever you want.",
      dialogDetails:
        "Viki ofrece dramas asiáticos con subtítulos comunitarios en muchos idiomas, funciones sociales y listas de seguimiento para no perderte episodios.",
    },
  ];

  return (
    <section
      id="extras"
      className="my-20 relative h-100 overflow-hidden flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Left / Right arrows */}
      <button
        aria-label="Anterior"
        onClick={prev}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full z-20 bg-black/30 hover:bg-black/50 shadow transition"
      >
        <ArrowLeft size={20} />
      </button>

      <button
        aria-label="Siguiente"
        onClick={next}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full z-20 bg-black/30 hover:bg-black/50 shadow transition"
      >
        <ArrowRight size={20} />
      </button>
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/extras/background-desktop.webp"
          alt="bg"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 from-transparent to-black/50" />
      </div>
      <div className="mx-auto w-full text-white">
        <div
          className="flex transition-transform duration-600 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {extras.map((extra) => (
            <div
              key={extra.id}
              onClick={() => setOpenDialog(extra.id)}
              className="w-screen flex-none flex justify-center"
            >
              <div className="max-w-5xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-white">
                    <div>
                      <img
                        src={extra.logo}
                        alt={`${extra.title} logo`}
                        className="h-20 md:h-28 object-contain"
                        width={240}
                        height={200}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display =
                            "none";
                        }}
                      />
                    </div>
                    <p className="text-base md:text-lg text-white/90 mb-4 max-w-2xl">
                      {extra.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDialog(extra.id);
                        }}
                        className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded font-semibold hover:brightness-95 transition"
                      >
                        Ver detalles
                        <ArrowRight size={16} />
                      </button>
                      <span className="text-xs text-white/60">
                        Contenido recomendado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-30 flex gap-2">
          {extras.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-8 rounded-full transition ${
                i === index ? "bg-yellow-500 scale-110" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
