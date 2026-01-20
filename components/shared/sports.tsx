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

const CARTOON_CHANNELS = [
  { src: "/sports/cartoons/adult_swim.webp", alt: "Adult Swim" },
  { src: "/sports/cartoons/cn.svg", alt: "Cartoon Network" },
  { src: "/sports/cartoons/disney_channel.webp", alt: "Disney Channel" },
  { src: "/sports/cartoons/disney_junior.webp", alt: "Disney Junior" },
  { src: "/sports/cartoons/disney_xd.webp", alt: "Disney XD" },
  { src: "/sports/cartoons/dk.webp", alt: "Discovery Kids" },
  { src: "/sports/cartoons/nickelodeon.webp", alt: "Nickelodeon" },
  { src: "/sports/cartoons/tooncast.svg", alt: "Tooncast" },
];

function SportCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-white/10 grid place-items-center size-40 h-full py-3 rounded-3xl shrink-0 overflow-hidden will-change-transform">
      <img
        src={src}
        alt={alt}
        width={120}
        height={80}
        loading="lazy"
        decoding="async"
        className="object-contain pointer-events-none select-none"
      />
    </div>
  );
}

const CarouselTrack = ({ items, animationClass }: { items: typeof SPORTS | typeof CARTOON_CHANNELS; animationClass: string }) => (
  <>
    <div className={`flex items-center justify-center gap-4 ${animationClass}`}>
      {items.map((item, i) => (
        <SportCard key={`${item.src}-${i}-1`} src={item.src} alt={item.alt} />
      ))}
    </div>
    <div className={`flex items-center justify-center gap-4 ${animationClass}`}>
      {items.map((item, i) => (
        <SportCard key={`${item.src}-${i}-2`} src={item.src} alt={item.alt} />
      ))}
    </div>
    <div aria-hidden className={`flex items-center justify-center gap-4 ${animationClass}`}>
      {items.map((item, i) => (
        <SportCard key={`${item.src}-${i}-3`} src={item.src} alt={item.alt} />
      ))}
    </div>
  </>
);

export default function Sports () {
  return (
    <section id="sports" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sección de Deportes */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Deportes en Vivo
            </h2>
            <p className="text-lg text-white/60">
              Disfruta de los mejores eventos deportivos en tiempo real
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex overflow-hidden gap-4 group mask-x-from-94% h-40">
              <CarouselTrack items={SPORTS} animationClass="animate-carrousel group-hover:paused" />
            </div>

            <div className="flex overflow-hidden gap-4 group mask-x-from-94% h-40">
              <CarouselTrack items={SPORTS} animationClass="animate-carrousel-reverse group-hover:paused" />
            </div>
          </div>
        </div>

        {/* Sección de Caricaturas */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Canales de Caricaturas
            </h2>
            <p className="text-lg text-white/60">
              Disfruta de entretenimiento infantil y para toda la familia
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex overflow-hidden gap-4 group mask-x-from-94% h-40">
              <CarouselTrack items={CARTOON_CHANNELS} animationClass="animate-carrousel group-hover:paused" />
            </div>

            <div className="flex overflow-hidden gap-4 group mask-x-from-94% h-40">
              <CarouselTrack items={CARTOON_CHANNELS} animationClass="animate-carrousel-reverse group-hover:paused" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
