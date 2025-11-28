"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function AndroidBox() {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const boxes = [
    {
      id: "box1",
      title: "MXQ Pro 4K TV Box",
      subtitle: "El acceso económico al streaming 4K con Android.",
      category: "Android y OTT",
      image:
        "androidbox/box1_1.png",
      dialogDetails:
        "El 4K Google TV Box S3+ ofrece la mejor experiencia de streaming con soporte para Dolby Vision y Dolby Atmos. Compatible con todos los servicios de streaming principales y control por voz integrado.",
    },
    {
      id: "box2",
      title: "Z8 Pro Android TV Box",
      subtitle: "El centro de entretenimiento 8K que estabas esperando.",
      category: "Android y OTT",
      image:
        "androidbox/box2_1.png",
      dialogDetails:
        "El 4K Google TV Box S3+ ofrece la mejor experiencia de streaming con soporte para Dolby Vision y Dolby Atmos. Compatible con todos los servicios de streaming principales y control por voz integrado.",
    },
    {
      id: "box3",
      title: "Onn. Streaming Device con Google TV (Full HD)",
      subtitle: "La forma más fácil de convertir tu TV en inteligente.",
      category: "Android y OTT",
      image:
        "androidbox/box3_1.png",
      dialogDetails:
        "El 4K Google TV Box S3+ ofrece la mejor experiencia de streaming con soporte para Dolby Vision y Dolby Atmos. Compatible con todos los servicios de streaming principales y control por voz integrado.",
    },
    {
      id: "box4",
      title: "4K GOOGLE TV BOX S3+ | DOLBY VISION ATMOS",
      subtitle: "LEAP-S3",
      category: "Android y OTT",
      image:
        "https://cdn.prod.website-files.com/66850239fff66d6587e42560/67583e5bd72c23ff9d653f29_LEAPS3_RCU_2000x2000_perspective-right.avif",
      dialogDetails:
        "El 4K Google TV Box S3+ ofrece la mejor experiencia de streaming con soporte para Dolby Vision y Dolby Atmos. Compatible con todos los servicios de streaming principales y control por voz integrado.",
    },
  ];

  return (
    <section id="androidbox" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestro Android Box
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {boxes.map((box) => (
            <div
              key={box.id}
              onClick={() => setOpenDialog(box.id)}
              className="group max-w-sm mx-auto rounded-2xl bg-white/10 overflow-hidden border border-white/10 hover:bg-white/20 hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            >
              <div className="p-4 grid place-items-center bg-white/80 overflow-hidden">
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-56 object-contain transition-transform duration-300 group-hover:scale-90"
                />
              </div>

              <div className="px-6 py-6">
                <p className="text-sm text-white uppercase">{box.category}</p>
                <h3 className="mt-2 text-lg sm:text-xl font-extrabold text-blue-400 leading-tight">
                  {box.title}
                </h3>
                <p className="mt-2 text-sm text-white">{box.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialogs */}
      {boxes.map((box) => (
        <Dialog
          key={box.id}
          open={openDialog === box.id}
          onOpenChange={(open) => setOpenDialog(open ? box.id : null)}
        >
          <DialogContent className="bg-black/80 border border-white/10 backdrop-blur-md p-0 flex flex-col sm:max-w-md">
            <div>
              <div className="text-white text-center px-6 pt-4 font-bold text-xs sm:text-md">
                Conoce nuestro Android Box
              </div>
            </div>

            <div className="relative max-h-70 bg-linear-to-b from-white/40 to-black flex justify-center overflow-hidden">
              <img
                src={box.image}
                alt={box.title}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>

            <div className="px-4 pb-2">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-3xl text-center font-extrabold text-white">
                  {box.title}
                </DialogTitle>
                <DialogDescription className="text-white/70 text-center text-sm sm:text-md text-balance">
                  <div className="font-light mt-2">{box.dialogDetails}</div>
                </DialogDescription>
              </DialogHeader>
            </div>
            <div className="w-full px-3 pb-3">
              <button className="cursor-pointer w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors duration-300">
                Comprar Ahora
              </button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
}
