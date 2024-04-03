'use client'
import { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from 'react-icons/hi'
import { chapitres } from '../data'

export default function NavBar() {
  const [isOpen, setOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleClass = () => {
    setOpen(!isOpen)
  }
  const handleSubMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      id="main-navigation"
      className={
        isOpen ? 'open relative lg:basis-1/3' : 'close relative lg:basis-1/3'
      }
      aria-label="main"
    >
      <HiOutlineMenu
        size={40}
        className="open-btn lg:hidden cursor-pointer sm:static fixed top-4 right-2"
        onClick={toggleClass}
      />
      <HiOutlineX
        size={40}
        className="close-btn sm:hidden cursor-pointer sm:static fixed top-4 right-2"
        onClick={toggleClass}
      />
      <ul className="hidden lg:flex h-auto lg:w-auto w-full bg-white lg:bg-transparent">
        <li
          onClick={handleSubMenu}
          className={isMenuOpen ? 'chapters open' : 'chapters close'}
        >
          <NavLink href="#">
            Chapitres
            {!isMenuOpen ? (
              <HiOutlineChevronDown size={15} className="has-submenu" />
            ) : (
              <HiOutlineChevronUp size={15} className="has-submenu" />
            )}
          </NavLink>
          <ul>
            {chapitres.map((chapitre) => (
              <li key={chapitre.id}>
                <Link
                  className="sm:text-base hover:font-bold"
                  href={chapitre.month + `/`}
                >
                  {chapitre.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <NavLink href="/le-livre/">Le livre (PDF)</NavLink>
        </li>
        <li>
          <NavLink href="/contact/">Contact</NavLink>
        </li>
        <li>
          <NavLink href="/a-propos/">&Agrave; propos</NavLink>
        </li>
      </ul>
    </nav>
  )
}
