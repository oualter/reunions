import FooterLink from './FooterLink'
export default function FooterBar () {
  let today = new Date();
  let yearToday = today.getFullYear()
  return (
    <footer className="shrink border-t py-3 bg-white/[0.85] sm:bg-transparent ">
      <nav className="sm:flex justify-center bg-white/50">
        <ul className="sm:text-xl text-sm sm:font-bold sm:flex sm:gap-12 px-3">
          <li>
            <FooterLink href="https://www.1651ouest.fr/">
              &copy;&nbsp;16.51 Ouest {yearToday}
            </FooterLink>
          </li>
          <li>
            <FooterLink href="/a-propos/">&Agrave; propos</FooterLink>
          </li>
          <li>
            <FooterLink href="/contact/">Contact</FooterLink>
          </li>
          <li>
            <FooterLink href="/mentions-legales/">Mentions légales</FooterLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}