"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50 bg-linear-to-b from-black/90 to-transparent">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo shiba tv live" width={180} height={40} />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <a
              href="#plans"
              className="text-white hover:text-white transition-colors"
            >
              Planes
            </a>
            {/* <a
              href="#benefits"
              className="text-white/70 hover:text-white transition-colors"
            >
              Beneficios
            </a> */}
            <a
              href="#extras"
              className="text-white/70 hover:text-white transition-colors"
            >
              Extras
            </a>
            <a
              href="#tv-live"
              className="text-white/70 hover:text-white transition-colors"
            >
              TV en vivo
            </a>
            <a
              href="#sports"
              className="text-white/70 hover:text-white transition-colors"
            >
              Deportes
            </a>
            <a
              href="/noticias"
              className="text-white/70 hover:text-white transition-colors"
            >
              Noticias
            </a>
            <a
              href="#faq"
              className="text-white/70 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-main text-white rounded-sm font-medium hover:bg-red-500 transition-colors">
              Iniciar sesión
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a
              href="#plans"
              className="text-white hover:text-white transition-colors"
            >
              Planes
            </a>
            <a
              href="#benefits"
              className="text-white/70 hover:text-white transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#extra"
              className="text-white/70 hover:text-white transition-colors"
            >
              Extras
            </a>
            <a
              href="#tv-live"
              className="text-white/70 hover:text-white transition-colors"
            >
              TV en vivo
            </a>
            <a
              href="#sports"
              className="text-white/70 hover:text-white transition-colors"
            >
              Deportes
            </a>
            <a
              href="#faq"
              className="text-white/70 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <button className="w-full px-6 py-2 bg-accent text-accent-white rounded-full font-medium hover:bg-accent/90 transition-colors">
              Sign In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
