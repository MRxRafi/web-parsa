"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Conócenos", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Blog", href: "https://www.parsafathi.com/blog", external: true },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-legal-black/90 backdrop-blur-md py-4 border-white/5" 
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-sm border border-legal-gold/30 group-hover:border-legal-gold transition-colors">
            <Image 
              src="/logo.png" 
              alt="Parsa Fathi Logo" 
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="text-xl font-serif font-bold tracking-tighter text-white uppercase group-hover:text-legal-gold transition-colors">
            Parsa <span className="text-legal-gold">Fathi</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              className="text-sm font-medium tracking-widest uppercase text-gray-400 hover:text-legal-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="inline-block px-6 py-2 border border-legal-gold text-legal-gold text-xs font-bold tracking-widest uppercase hover:bg-legal-gold hover:text-legal-black transition-all duration-300"
          >
            Consulta
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-legal-black border-b border-white/5 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-sm font-medium tracking-widest uppercase text-gray-400 hover:text-legal-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="block w-full text-center py-4 bg-legal-gold text-legal-black text-sm font-bold tracking-widest uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Consulta Privada
          </Link>
        </div>
      )}
    </nav>
  );
}
