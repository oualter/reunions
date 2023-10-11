"use client";
import { useState } from 'react';
import NavLink from './NavLink'

export default function NavBar() {

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className={menuOpen ? 'open' : ''}>
      <button
        className={menuOpen ? 'nav-toggle open' : 'nav-toggle'}
        onClick={() => {
          setMenuOpen(!menuOpen)
          console.log('open ??? ', menuOpen)
        }}
      >
        <span class="bar-top"></span>
        <span class="bar-mid"></span>
        <span class="bar-bot"></span>
      </button>

      <nav
        id="main-navigation"
        className={menuOpen ? 'open' : ''}
        aria-label="main"
      >
        <ul>
          <li>
            <NavLink href="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink href="/le-livre">Le livre (PDF)</NavLink>
          </li>
          <li>
            <NavLink href="/a-propos">&Agrave; propos</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="chapters" className={menuOpen ? 'open' : ''}>
        <p className="hx_level2">Chapitres</p>
        <ul>
          <li>
            <NavLink href="/janvier/">
              1er janvier, Place de la Réunion, 00h01
            </NavLink>
          </li>
          <li>
            <NavLink href="/fevrier/">
              5 février, Place de la Réunion, 15h04
            </NavLink>
          </li>
          <li>
            <NavLink href="/mars/">22 mars, Place de la Réunion, 06h23</NavLink>
          </li>
          <li>
            <NavLink href="/avril/">
              17 avril, Place de la Réunion, 16h40
            </NavLink>
          </li>
          <li>
            <NavLink href="/mai/">30 mai, Place de la Réunion, 12h47</NavLink>
          </li>
          <li>
            <NavLink href="/juin/">19 juin, Place de la Réunion, 18h32</NavLink>
          </li>
          <li>
            <NavLink href="/juillet/">
              15 juillet, Place de la Réunion, 14h46
            </NavLink>
          </li>
          <li>
            <NavLink href="/aout/">4 août, Place de la Réunion, 23h12</NavLink>
          </li>
          <li>
            <NavLink href="/septembre/">
              3 septembre, Place de la Réunion, 08h23
            </NavLink>
          </li>
          <li>
            <NavLink href="/octobre/">
              8 octobre, Place de la Réunion, 17h18
            </NavLink>
          </li>
          <li>
            <NavLink href="/novembre/">
              27 novembre, Place de la Réunion, 11h37
            </NavLink>
          </li>
          <li>
            <NavLink href="/decembre/">
              19 décembre, Place de la Réunion, 03h23
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
