<<<<<<< HEAD
import NavLink from './NavLink'

export default function NavBar() {
  return (
    <nav className="">

      <ul className="flex justify-center gap-2">
=======
"use client";
import { useState } from 'react';
import NavLink from './NavLink'

export default function NavBar() {

const [menuOpen, setMenuOpen] = useState('');

  return (
    <>
    <button id="hamburger-button" className="relative h-8 w-8 cursor-pointer text-3xl" onClick={()=>{setMenuOpen(!menuOpen)}}>
          <div
            className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
          </div>
        </button>

    <nav className={menuOpen ? "open" : ""} aria-label="main">
      <ul className="flex gap-2">
>>>>>>> 0775cd077a135a2c24275101b6df6843a5e8757f
        <li className="px-10">
          <NavLink href="/">Accueil</NavLink>
        </li>
        <li className="px-10">
          <NavLink href="/a-propos">A propos</NavLink>
        </li>
        <li className="px-10">
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
<<<<<<< HEAD
=======

<section id="mobile-menu"
      className="top-68 justify-center absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl">
      <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
        <a href="#hero" className="w-full py-6 text-center hover:opacity-90">Home</a>
        <a href="#rockets" className="w-full py-6 text-center hover:opacity-90">Our Rockets</a>
        <a href="#testimonials" className="w-full py-6 text-center hover:opacity-90">Testimonials</a>
        <a href="#contact" className="w-full py-6 text-center hover:opacity-90">Contact Us</a>
        <a href="#footer" className="w-full py-6 text-center hover:opacity-90">Legal</a>
      </nav>
    </section>


    </>
>>>>>>> 0775cd077a135a2c24275101b6df6843a5e8757f
  )
}
