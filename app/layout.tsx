import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
  title: 'Hraběnka – Kavárna & Cukrárna',
  icons: {
    icon: '/images/hrabenka.png'
  },
  openGraph: {
    title: 'Kavárna Hraběnka',
    description:
           'Elegantní kavárna a cukrárna Hraběnka v městečku Rabí. Výběrová káva, poctivé dezerty a atmosféra zámecké kavárny.',
    url: 'https://www.kavarnahrabenka.cz',
    siteName: 'Kavárna Hraběnka',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: '/images/hrabenka.jpg',
        width: 1200,
        height: 630,
        alt: 'Kavárna Hraběnka'
      }
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${serif.variable} ${sans.variable}`}>
    <body className="font-sans bg-[#fdf6ee] text-[#6e4e37]">{children}</body>
    </html>
  )
}
