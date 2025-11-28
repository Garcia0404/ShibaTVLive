"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Extras = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

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
    <section id="extras" className="py-20 px-4 relative">
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center items-center opacity-80 mask-y-from-85%">
        <img
          src="/extras/background.svg"
          alt="extras background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Contenido Extra Exclusivo
        </h2>
        <p className="text-lg text-white/60">
          Disfruta de contenido adicional que no encontrarás en ningún lugar.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:px-30 px-0">
          {extras.map((extra, idx) => {
            // base card classes
            const base =
              "backdrop-blur-lg border p-6 bg-white/40 rounded-lg transition-colors duration-300 flex flex-col gap-4 items-start cursor-pointer hover:bg-white/70";

            let positionClass = "";
            if (idx === 4) {
              positionClass = "lg:col-start-2 lg:col-end-3";
            } else if (idx === 5) {
              positionClass = "lg:col-start-3 lg:col-end-4";
            }

            return (
              <div
                key={extra.id}
                onClick={() => setOpenDialog(extra.id)}
                className={`${base} ${positionClass}`}
              >
                <img
                  src={extra.logo}
                  alt={`${extra.title} logo`}
                  className="object-contain shrink-0"
                  width={100}
                  height={40}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {extra.title}
                  </h3>
                  <p className="text-black">{extra.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dialogs */}
      {extras.map((extra) => (
        <Dialog
          key={extra.id}
          open={openDialog === extra.id}
          onOpenChange={(open) => setOpenDialog(open ? extra.id : null)}
        >
          <DialogContent className="bg-black/80 border border-white/10 backdrop-blur-md p-0 flex flex-col">
            <div>
              <div className="text-white text-center px-6 pt-4 font-bold sm:text-lg">
                Agregue contenidos extras
              </div>
            </div>

            <div className="relative w-full h-50 overflow-hidden">
              {/* Imagen con mask gradient a transparente */}
              <img
                src="https://media.bss-prd.directvgo.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/i/m/img_generica_atresplayer.jpg"
                alt={extra.title}
                className="w-full h-full object-cover mask-b-from-10%"
              />
            </div>

            <div className="px-6 pb-2 md:pb-6 transform -translate-y-10">
              <DialogHeader>
                <DialogTitle className="text-3xl sm:text-6xl text-center font-extrabold text-white">
                  {extra.title}
                </DialogTitle>
                <DialogDescription className="text-white/70 text-center text-md sm:text-lg text-pretty">
                  <span className="sm:mx-12 font-semibold mt-2 block">
                    {extra.dialogDetails}
                  </span>
                  <div className="text-xs sm:text-sm text-white/60 mt-2 sm:mt-6">
                    {extra.description}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};
