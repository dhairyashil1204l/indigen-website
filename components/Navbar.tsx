"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks =  [
  {name:"Home", href:"#home"},
  {name:"About Us", href:"#about"},
  {name:"Services", href:"#services"},
  {name:"Industries", href:"#industries"},
  {name:"Solutions", href:"#solutions"},
  {name:"Technolgies", href:"#technologies"},
  {name:"Projects", href:"projects"},
  {name:"Blogs", href:"#blogs"},
  {name:"Contact", href:"#contact"},
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)

  }, []);

  return (
    <header
      className={`fixed left-0 top-5 z-50 w-full transition-all duration-300 $ {
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >

      <div className="container-x flex items-center justify-between">

         {/* Logo */}

        

          <div>
            <h2 className="text-xl font-extrabold text-red-600">
              INDIGEN
            </h2>

            <p className="text-xs tracking-[0.25em] text-white">
              TECHNOLOGIES
            </p>
          </div>
     



        {/* Menu */}

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((items) => (
            <Link
              key={items.name}
              href={items.href}
              className={`font-medium transition duration-300 ${
                scrolled
                ? "text-gray-800 hover:text-red-600"
                : "text-white hover:text-red-400"
              }`}
            >

              {items.name}

            </Link>
          ))}
        </nav>

        {/* CTA */}

        <Link
  href="#contact"
  className={`hidden rounded-lg px-6 py-3 font-semibold transition lg:block ${
    scrolled
      ? "bg-red-600 text-white hover:bg-red-700"
      : "border border-white text-white hover:bg-white hover:text-red-600"
  }`}
>
  Get Quote
</Link>

        
      </div>

    </header>
  );
}