export default function Platforms() {
  return (
    <section id="platforms" className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Lleva lo mejor de ShibaStream en donde estés
        </h2>
        <p className="text-lg text-white/60">
          Ve todo tu contenido desde tu celular, tablet o smart TV.
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center relative">
          {/* Blur dorado de fondo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="size-150 bg-yellow-500/30 rounded-full blur-3xl" />
          </div>

          <img
            src="/platforms/platforms.webp"
            alt="Platforms"
            width={400}
            height={400}
            className="w-full max-w-200 min-w-80 relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
