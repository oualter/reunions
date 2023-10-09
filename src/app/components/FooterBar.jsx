import FooterLink from './FooterLink'
export default function FooterBar () {
  return (
    <footer className="border-t py-3 ">
      <nav className="flex justify-center">
        <ul className="flex gap-2">
          <li className="mx-10">
            &copy;
            <FooterLink href="https://www.1651ouest.fr/">
              16-51 Ouest
            </FooterLink>
          </li>
          <li className="mx-10">
            <FooterLink href="/a-propos/">A propos</FooterLink>
          </li>
          <li className="mx-10">
            <FooterLink href="/contact/">Contact</FooterLink>
          </li>
          <li className="mx-10">
            <FooterLink href="/mentions-legales/">Mentions légales</FooterLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}