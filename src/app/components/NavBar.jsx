"use client";
import { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { chapitres } from '../data'

// import { getChapitres } from '@/lib/chapitres'
// import { GetChapitres } from './GetChapitres'
// import { getReunionsPosts } from './GetChapitres'

export default async function NavBar() {
  // const [menuOpen, setMenuOpen] = useState(false)
  // const dataChapitres = await getData();
  // console.log('dataChapitres => ',dataChapitres)
  return (

      // <aside className="open">
      <aside 
      className="open"
      // className={menuOpen ? 'open' : ''}
      >
      <button
        className="nav-toggle open"
        // className={menuOpen ? 'nav-toggle open' : 'nav-toggle'}
        // onClick={() => {
        //   setMenuOpen(!menuOpen)
        // }}
      >
        <span className="bar-top"></span>
        <span className="bar-mid"></span>
        <span className="bar-bot"></span>
      </button>

      <nav
        id="main-navigation"
        className="open"
        // className={menuOpen ? 'open' : ''}
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
      <nav id="chapters" className="open">
        {/* <nav id="chapters" className={menuOpen ? 'open' : ''}> */}
        <p className="hx_level2">Chapitres</p>
        <ul>
          {chapitres.map((chapitre) => (
            <li key={chapitre.id}>
              <Link href={chapitre.month+`/`}>
                {chapitre.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
