"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-s.png"
              alt="CurrenSea"
              width={37}
              height={36}
            />
            <span className="text-white font-medium text-lg">
              CurrenSea
            </span>
          </div>

          {/* Divider (Desktop only) */}
          <div className="hidden lg:block w-px h-6 bg-white/30" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-400">
            <a href="#FeaturesSection" className="hover:text-white transition">
              Features
            </a>
            <a href="#AboutSection" className="hover:text-white transition">
              About us
            </a>
            {/*}
            <a href="#" className="hover:text-white transition">
              Title
            </a>
            */}
          </nav>
        </div>

        {/* Desktop Buttons 
        <div className="hidden lg:flex items-center gap-3">
          <button className="h-10 px-5 rounded-xl bg-white/10 backdrop-blur-md text-sm text-white hover:bg-white/20 transition">
            Login
          </button>

          <button className="h-10 px-6 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>*/}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-lg px-6 pb-6 pt-4 space-y-4 text-white">

          <a href="#" className="block hover:text-gray-300">
            Features
          </a>
          <a href="#" className="block hover:text-gray-300">
            About us
          </a>
          <a href="#" className="block hover:text-gray-300">
            Title
          </a>

          <div className="pt-4 space-y-3">
            <button className="w-full h-11 font-inter rounded-xl bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition">
              Login
            </button>

            <button className="w-full h-11 font-mono rounded-xl bg-white text-black hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

