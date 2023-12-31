import './globals.css'
import NavBar from './components/NavBar.jsx'
import FooterBar from './components/FooterBar'
import GetChapitres from './components/GetChapitres'

export const metadata = {
  title: {
    default: 'Places de la Réunion',
    template: '%s | Places de la Réunion',
  },
  description: "Atelier d'écriture 2022-23",
  robots: 'noindex, nofollow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="container mx-auto min-h-screen flex flex-col pb-2 radial-bg grid-bg">
          <header>
            <div className="logo brand-name uppercase text-7xl Oswald">
              Places de la Réunion
              <div className="brand-leitmotiv text-3xl">
                Heureusement que le ginkgo biloba
              </div>
            </div>            
          </header>
          <NavBar />
        <main className="grow overflow-hidden">{children}</main>
        <FooterBar />
      </body>
    </html>
  )
}
