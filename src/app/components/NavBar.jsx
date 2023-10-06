import NavLink from './NavLink'

export default function NavBar() {
  return (
    <nav className="">

      <ul className="flex justify-center gap-2">
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
  )
}
