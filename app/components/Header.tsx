"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Header blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlight
 useEffect(() => {
  const headerHeight = 80; // h-20 = 80px

  const handleScroll = () => {
    const scrollY = window.scrollY + headerHeight + 10;

    const sections = [
      "FeaturesSection",
      "AboutSection",
      "TradeSteps",
      "FaqSection",
    ];

    let current = "";

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      if (scrollY >= section.offsetTop) {
        current = id;
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/header-logo.png"
              alt="CurrenSea"
              width={37}
              height={36}
            />
            <span className="text-white font-medium text-lg">
              CurrenSea
            </span>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-6 bg-white/30" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            <a
              href="#FeaturesSection"className={`transition ${active === "FeaturesSection"? "text-white font-medium": "text-gray-400 hover:text-white"}`}>
              Features
            </a>
            <a
              href="#AboutSection"className={`transition ${active === "AboutSection"? "text-white font-medium": "text-gray-400 hover:text-white"}`}>
              About us
            </a>
            <a
              href="#TradeSteps"className={`transition ${active === "TradeSteps"? "text-white font-medium": "text-gray-400 hover:text-white"}`}>
              How it works
            </a>
            <a
              href="#FaqSection"className={`transition ${active === "FaqSection"? "text-white font-medium": "text-gray-400 hover:text-white"}`}>
              FAQ
            </a>
          </nav>
        </div>
        {/* 
          <div className="pt-4 space-y-3">
            <button className="w-full h-11 rounded-xl bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition">
              Login
            </button>

            <button className="w-full h-11 rounded-xl bg-white text-black hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
        */} 

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white z-50"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full transition-all duration-300 overflow-hidden ${
          open
            ? "max-h-96 opacity-100 bg-black/95 backdrop-blur-lg"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 space-y-4 text-white">

          <a
            href="#FeaturesSection" onClick={() => setOpen(false)}className={`block ${active === "FeaturesSection"? "text-white font-medium": "text-gray-300" }`}>
            Features
          </a>
          <a
            href="#AboutSection"onClick={() => setOpen(false)}className={`block ${active === "AboutSection"? "text-white font-medium": "text-gray-300" }`}>
            About us
          </a>
          <a
            href="#TradeSteps"onClick={() => setOpen(false)}className={`block ${active === "TradeSteps"? "text-white font-medium": "text-gray-300"}`} >
            How it works
          </a>
          <a
            href="#FaqSection"onClick={() => setOpen(false)}className={`block ${active === "FaqSection"? "text-white font-medium": "text-gray-300"}`}>
            FAQ
          </a>
        </div>
        {/* 
          <div className="pt-4 space-y-3">
            <button className="w-full h-11 rounded-xl bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition">
              Login
            </button>

            <button className="w-full h-11 rounded-xl bg-white text-black hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
        */} 
      </div>
    </header>
  );
}