const SPORTS = [
  { src: "/sports/seriea.png", alt: "Serie A" },
  { src: "/sports/championsleague.png", alt: "Champions League" },
  { src: "/sports/laliga.webp", alt: "La Liga" },
  { src: "/sports/libertadores.png", alt: "Libertadores" },
  { src: "/sports/sudamericana.png", alt: "Sudamericana" },
  { src: "/sports/premierleague.png", alt: "Premier League" },
  { src: "/sports/bundesliga.png", alt: "Bundesliga" },
  { src: "/sports/europaleague.png", alt: "Europa League" },
  { src: "/sports/mundial2026.png", alt: "Mundial 2026" },
  { src: "/sports/fifa.webp", alt: "FIFA" },
  { src: "/sports/liga1.png", alt: "Liga 1" },
  { src: "/sports/atptour.png", alt: "ATP" },
  { src: "/sports/daviscup.png", alt: "Davis Cup" },
  { src: "/sports/euroleague.png", alt: "Euroleague" },
];

function SportCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-white/10 grid place-items-center size-40 h-full py-3 rounded-3xl shrink-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        width={120}
        height={80}
        loading="lazy"
        className="object-contain"
      />
    </div>
  );
}

export const Sports = () => {
  const trackItems = SPORTS;

  return (
    <section id="sports" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Deportes en Vivo
          </h2>
          <p className="text-lg text-white/60">
            Disfruta de los mejores eventos deportivos en tiempo real
          </p>
        </div>

        <div className="flex overflow-hidden gap-4 group mask-x-from-94% h-40">
          <div className="flex items-center justify-center gap-4 animate-carrousel group-hover:paused">
            {trackItems.map((item, i) => (
              <SportCard key={`${item.src}-${i}`} src={item.src} alt={item.alt} />
            ))}
          </div>
          <div aria-hidden className="flex items-center justify-center gap-4 animate-carrousel group-hover:paused">
            {trackItems.map((item, i) => (
              <SportCard key={`${item.src}-${i}`} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
