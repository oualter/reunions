import './globals.css'
import NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'

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
      <body className="container mx-auto min-h-screen flex flex-col px-4 pt-10 pb-2 radial-bg">
        <header>
          <div className="logo brand-name text-center text-5xl font-archisticonormal">
            Places de la Réunion
            <div className="brand-leitmotiv text-3xl">
              Heureusement que le ginko biloba
            </div>
          </div>
          <NavBar />
        </header>
        <main className="grow">{children}</main>
        <FooterBar />
      </body>
    </html>
  )
}
