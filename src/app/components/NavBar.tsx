'use client'
import { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { chapitres } from '../data'

export default function NavBar() {
  const [isOpen, setOpen] = useState(false)
  const toggleClass = () => {
    setOpen(!isOpen)
  }

  return (
    <aside className={isOpen ? 'open' : 'close'}>
      <button className="nav-toggle" onClick={toggleClass}>
        <span className="bar-top"></span>
        <span className="bar-mid"></span>
        <span className="bar-bot"></span>
      </button>

      <nav
        id="main-navigation"
        className={isOpen ? 'open' : 'close'}
        aria-label="main"
      >
        <ul>
          <li>
            <NavLink href="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink href="/le-livre/">Le livre (PDF)</NavLink>
          </li>
          <li>
            <NavLink href="/a-propos/">&Agrave; propos</NavLink>
          </li>
          <li>
            <NavLink href="/contact/">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="chapters" className={isOpen ? 'open' : 'close'}>
        {/* <nav id="chapters" className={menuOpen ? 'open' : ''}> */}
        <p className="text-5xl font-archisticonormal">Chapitres</p>
        <ul className="leading-10">
          {chapitres.map((chapitre) => (
            <li key={chapitre.id}>
              <Link
                className="font-archisticonormal text-xl hover:font-bold"
                href={chapitre.month + `/`}
              >
                {chapitre.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
