// components/Header.tsx

"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)
  

const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 20)
  window.addEventListener("scroll", onScroll)
  return () => window.removeEventListener("scroll", onScroll)
}, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      <div className={`${scrolled ? "bg-black/80 shadow-lg" : "bg-black/60"} backdrop-blur-md border-b border-white/10`}>
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="text-lg font-semibold tracking-tight">
              Zubaa <span className="text-brand">Media</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
              <a href="#services" className="hover:text-white transition">
                Our Services
              </a>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#apply"
                className="
                  bg-brand
                  text-black
                  px-6 py-3
                  rounded-lg
                  font-medium
                  shadow-[0_0_30px_rgba(16,185,129,0.4)]
                  hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]
                  transition
                "
              >
                I’m Ready To Scale
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="
          md:hidden
          bg-black
          border-b border-white/10
        ">
          <div className="px-6 py-6 flex flex-col gap-6 text-gray-300">

            <a href="#services" onClick={() => setOpen(false)}>
              Our Services
            </a>

            <a href="#about" onClick={() => setOpen(false)}>
              About Us
            </a>

            <a
              href="#apply"
              className="
                bg-brand
                text-black
                px-6 py-3
                rounded-lg
                font-medium
                text-center
                shadow-[0_0_30px_rgba(16,185,129,0.4)]
              "
              onClick={() => setOpen(false)}
            >
              I’m Ready To Scale
            </a>

          </div>
        </div>
      )}
    </header>
  )
}