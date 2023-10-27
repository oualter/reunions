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
      <body className="container mx-auto min-h-screen flex flex-col px-4 pb-2 radial-bg">
        <header className="pt-5">
          <div className="logo brand-name text-center font-medium text-5xl font-archisticonormal">
            Places de la Réunion
            <div className="brand-leitmotiv text-2xl">
              Heureusement que le ginko biloba
            </div>
          </div>
          <NavBar />
        </header>

        <main className="grow">
          {children}
        </main>
        <FooterBar />
      </body>
    </html>
  )
}
