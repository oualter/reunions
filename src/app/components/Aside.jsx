'use client'
import { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { chapitres } from '../data'

export default function Aside() {
   return(
    <aside>    
    <nav id="chapters" className={isOpen ? 'open' : 'close'}>
        <p className="text-5xl mb-6">Chapitres</p>
        <ul className="leading-10">
          {chapitres.map((chapitre) => (
            <li key={chapitre.id}>
              <Link
                className="text-xl hover:font-bold"
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