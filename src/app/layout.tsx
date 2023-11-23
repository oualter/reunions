import './globals.css'
import NavBar from './components/NavBar'
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
      <body className="container mx-auto min-h-screen flex flex-col px-4 pb-2 radial-bg grid-bg">
        <div className="wrapper-page bg-white opacity-90 ">
          <header className="p-5 fixed z-10">
            <div className="logo brand-name text-center font-medium text-7xl font-archisticonormal">
              Places de la Réunion
              <div className="brand-leitmotiv text-3xl">
                Heureusement que le ginkgo biloba
              </div>
            </div>
            <NavBar />
          </header>

          <main className="grow overflow-hidden border-2">{children}</main>
        </div>
        <FooterBar />
      </body>
    </html>
  )
}
