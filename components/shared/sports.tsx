const SPORTS = [
  { src: "/sports/seriea.webp", alt: "Serie A" },
  { src: "/sports/championsleague.webp", alt: "Champions League" },
  { src: "/sports/laliga.webp", alt: "La Liga" },
  { src: "/sports/libertadores.webp", alt: "Libertadores" },
  { src: "/sports/sudamericana.webp", alt: "Sudamericana" },
  { src: "/sports/premierleague.webp", alt: "Premier League" },
  { src: "/sports/bundesliga.webp", alt: "Bundesliga" },
  { src: "/sports/europaleague.webp", alt: "Europa League" },
  { src: "/sports/mundial2026.webp", alt: "Mundial 2026" },
  { src: "/sports/fifa.webp", alt: "FIFA" },
  { src: "/sports/liga1.webp", alt: "Liga 1" },
  { src: "/sports/atp.webp", alt: "ATP" },
  { src: "/sports/davis.webp", alt: "Davis Cup" },
  { src: "/sports/euroleague.webp", alt: "Euroleague" },
];

function SportCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-white grid place-items-center w-54 h-full p-2 rounded-3xl shrink-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        width={150}
        height={120}
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

        <div className="flex overflow-x-auto gap-4 group mask-x-from-80%" style={{ scrollbarWidth: "none" }}>
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
