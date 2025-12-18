import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <span className="text-xl font-bold text-yellow-500">
          Pizzaria Abacaxi 🍍
        </span>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-yellow-500">Home</a>
          <a href="#menu" className="hover:text-yellow-500">Menu</a>
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-4 pb-6 flex flex-col gap-4">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
