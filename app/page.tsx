import Header from "@/components/shared/header";
import Hero from "@/components/shared/hero";
import Plans from "@/components/plans/plans";
import FAQ from "@/components/shared/faq";
import Footer from "@/components/shared/footer";
import HomeClient from "@/components/home/home-client";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Plans />

      <HomeClient />

      <FAQ />
      <Footer />
      <a
        href="https://wa.me/51931399867"
        target="_blank"
        className="animate-bounce fixed flex items-center pe-3 bottom-0 right-0 m-4 z-50 cursor-pointer bg-green-700 rounded-md"
        rel="noopener noreferrer"
      >
        <Image src="/ws-btn.png" width={40} height={40} alt="WhatsApp"></Image>
        <div>
          <span className="text-white font-semibold text-sm">
            Contacta con Shiba
          </span>
        </div>
      </a>
    </main>
  );
}
