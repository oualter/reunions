import NavLink from './NavLink'

export default function NavBar() {
  return (
    <nav className="bg-orange-600">
      <button className="bg-orange-100 border-solid border-2 border-indigo-600">
        Open / Close
      </button>
      <ul className="flex gap-2">
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
