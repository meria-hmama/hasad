"use client";                                     
import { useState } from "react";                 

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);        

  return (
    <header className="border-b border-stone-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-green-800">Hasad</a>

        <ul className="hidden gap-8 text-sm font-medium text-stone-600 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="rounded-full bg-green-800 px-5 py-2 text-sm font-semibold text-white hover:bg-green-700">
            Join us
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-lg p-2 text-stone-700 hover:bg-stone-100 md:hidden"
          >
            <span className="block text-2xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-stone-100 px-6 py-4 text-stone-700 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-3 font-medium">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}