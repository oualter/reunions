'use client'
import { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { HiOutlineMenu, HiOutlineX, HiOutlineChevronDown } from 'react-icons/hi'
import { chapitres } from '../data'

export default function NavBar() {
  const [isOpen, setOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleClass = () => {
    setOpen(!isOpen)
  }
  const handleSubMenu = ()=>{
    console.log('isMenuOpen => ', isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    // <aside id="navigation-container" className={isOpen ? 'open' : 'close'}>
    //   <button className="nav-toggle" onClick={toggleClass}>
    //     <span className="bar-top"></span>
    //     <span className="bar-mid"></span>
    //     <span className="bar-bot"></span>
    //   </button>

    <nav
      id="main-navigation"
      className={
        isOpen ? 'open relative sm:basis-1/3' : 'close relative sm:basis-1/3'
      }
      aria-label="main"
    >
      <HiOutlineMenu
        size={40}
        className="open-btn sm:hidden cursor-pointer sm:static fixed top-4 right-2"
        onClick={toggleClass}
      />
      <HiOutlineX
        size={40}
        className="close-btn sm:hidden cursor-pointer sm:static fixed top-4 right-2"
        onClick={toggleClass}
      />
      <ul className="hidden sm:flex h-auto sm:w-auto w-full bg-white sm:bg-transparent">
        <li
          onClick={handleSubMenu}
          className={isMenuOpen ? 'chapters open' : 'chapters close'}
        >
          <NavLink href="#">
            Chapitres
            <HiOutlineChevronDown size={15} className="has-submenu" />
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
    //   <nav id="chapters" className={isOpen ? 'open' : 'close'}>
    //     <p className="text-5xl mb-6">Chapitres</p>
    //     <ul className="leading-10">
    //       {chapitres.map((chapitre) => (
    //         <li key={chapitre.id}>
    //           <Link
    //             className="text-xl hover:font-bold"
    //             href={chapitre.month + `/`}
    //           >
    //             {chapitre.title}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </aside>
  )
}
