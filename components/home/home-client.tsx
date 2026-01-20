"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { toast } from "sonner";

const Extras = dynamic(() => import("@/components/shared/extras"));
const Sports = dynamic(() => import("@/components/shared/sports"));
const Platforms = dynamic(() => import("@/components/shared/platforms"));
const AndroidBox = dynamic(() => import("@/components/shared/androidbox"));
const Subscription = dynamic(() => import("@/components/shared/subscription"));

export default function HomeClient() {
  useEffect(() => {
    const messages = [
      "Un suscriptor acaba de unirse al plan Básico",
      "Un suscriptor ha comprado el plan Premium",
      "Nuevo usuario registrado en la plataforma",
      "Se ha completado una nueva suscripción anual",
      "Un cliente renovó su membresía",
    ];

    const types = ["success", "info", "warning"] as const;

    let timeout: ReturnType<typeof setTimeout>;

    const trigger = () => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      const type = types[Math.floor(Math.random() * types.length)];
      toast[type](msg);

      timeout = setTimeout(trigger, Math.random() * 6000 + 4000);
    };

    timeout = setTimeout(trigger, Math.random() * 6000 + 4000);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Extras />
      <Sports />
      <Platforms />
      <AndroidBox />
      <Subscription />
    </>
  );
}
